const fs = require('fs');
const sharp = require('sharp');
const toArrayBuffer = require('buffer-to-arraybuffer');
const vm = require('vm');
const xml2js = require('xml2js');
const ddsParser = require('dds-parser');
const pngjs = require('pngjs');

const parser = new xml2js.Parser();

Array.prototype.select = function (value, key = 'id') {
  return this.find((item) => item?.$ != null && item?.$[key] === value);
};

Array.prototype.translate = function (value, translations, key = 'id') {
  return translations[this.select(value, key)?.$?.handle];
};

function getWikiURL(name) {
  return `https://bg3.wiki/wiki/${name.replace(' ', '_')}`;
}

function unquote(value) {
  return value.substring(1, value.length - 1);
}

const statRegex = /^[^"]* |".*?"| /g;
async function getStatFileAsJSON(file) {
  const rawData = await fs.readFileSync(file);
  const lines = String(rawData).split('\n');
  const entries = [];
  for (const line of lines) {
    const tokens = line.match(statRegex)?.filter((token) => token != ' ') ?? [];
    if (tokens.length === 0) {
      continue;
    }
    if (tokens[0] === 'new entry ') {
      entries.push({ id: unquote(tokens[1]), data: {} });
    }
    const entry = entries[entries.length - 1];
    if (tokens[0] === 'type ') {
      entry.type = unquote(tokens[1]);
    }
    if (tokens[0] === 'using ') {
      entry.using = unquote(tokens[1]);
    }
    if (tokens[0] === 'data ') {
      entry.data[unquote(tokens[1])] = unquote(tokens[2]);
    }
  }
  return entries;
}

async function getDDSIconPartAsBase64URI(file, xStart, xEnd, yStart, yEnd) {
  return new Promise(async (resolve, reject) => {
    const data = await fs.readFileSync(file);
    const buffer = toArrayBuffer(data);
    const metadata = ddsParser.parseHeaders(buffer);
    const image = metadata.images[0];
    const { width: imageWidth, height: imageHeight } = image.shape;
    const rgba = ddsParser.decodeDds(
      new Uint8Array(buffer.slice(image.offset, image.offset + image.length)),
      metadata.format,
      imageWidth,
      imageHeight,
    );
    const png = new pngjs.PNG({
      width: imageWidth,
      height: imageHeight,
    });
    for (let y = 0; y < imageHeight; y++) {
      for (let x = 0; x < imageWidth; x++) {
        const idx = (y * imageWidth + x) * 4;
        png.data[idx] = rgba[idx];
        png.data[idx + 1] = rgba[idx + 1];
        png.data[idx + 2] = rgba[idx + 2];
        png.data[idx + 3] = rgba[idx + 3];
      }
    }
    const pngBuffer = pngjs.PNG.sync.write(png);
    const left = Math.floor(xStart * imageWidth);
    const top = Math.floor(yStart * imageHeight);
    const width = Math.floor((xEnd - xStart) * imageWidth);
    const height = Math.floor((yEnd - yStart) * imageHeight);
    sharp(pngBuffer)
      .extract({ left, top, width, height })
      .toBuffer((error, buffer) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(`data:image/png;base64,${buffer.toString('base64')}`);
      });
  });
}

async function getIconAsBase64URI(iconID) {
  // TODO: also look at other icon files
  // TODO: should probably parse these all at ones to make it faster
  const icons = await getXMLFileAsJSON(
    'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/GUI/Icons_Items.lsx',
  );
  const icon = icons.save.region[0].node[0].children[0].node.find(
    (node) => node.attribute.select('MapKey').$.value === iconID,
  );
  if (icon == null) {
    return null;
  }
  return await getDDSIconPartAsBase64URI(
    'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Icons.pak/Public/Shared/Assets/Textures/Icons/Icons_Items.dds',
    parseFloat(icon.attribute.select('U1').$.value),
    parseFloat(icon.attribute.select('U2').$.value),
    parseFloat(icon.attribute.select('V1').$.value),
    parseFloat(icon.attribute.select('V2').$.value),
  );
}

async function getXMLFileAsJSON(file) {
  const rawData = await fs.readFileSync(file);
  return await parser.parseStringPromise(rawData);
}

async function getRootTemplate(templateID) {
  const sharedFile = `C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/RootTemplates/Extracted/${templateID}.lsx`;
  const gustavFile = `C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Gustav.pak/Public/Gustav/RootTemplates/Extracted/${templateID}.lsx`;
  if (await fs.existsSync(sharedFile)) {
    return await getXMLFileAsJSON(sharedFile);
  } else if (await fs.existsSync(gustavFile)) {
    return await getXMLFileAsJSON(gustavFile);
  }
  return null;
}

async function getEnglishTranslations() {
  const english = await getXMLFileAsJSON(
    'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted English.pak/Localization/English/english.xml',
  );
  const translations = {};
  for (const item of english.contentList.content) {
    translations[item.$.contentuid] = item._;
  }
  return translations;
}

async function getFeats(file, translations) {
  const feats = await getXMLFileAsJSON(file);
  return feats.save.region[0].node[0].children[0].node.map((child) => {
    const id = child.attribute.select('UUID').$.value;
    const name = child.attribute.translate('DisplayName', translations);
    const description = child.attribute.translate('Description', translations);
    return {
      id,
      name,
      description,
      iconURL: '',
      linkURL: getWikiURL(name),
      tags: ['Feat'],
    };
  });
}

async function getArmor(file, translations) {
  const entries = await getStatFileAsJSON(file);
  for (const entry of entries) {
    if (!entry.data.RootTemplate) {
      continue;
    }
    const template = await getRootTemplate(entry.data.RootTemplate);
    if (!template) {
      continue;
    }
    const node = template.save.region[0].node[0].children[0].node[0];
    const name = node.attribute.translate('DisplayName', translations);
    const description = node.attribute.translate('Description', translations);
    const icon = node.attribute.select('Icon')?.$?.value;
    if (!name || !description) {
      continue;
    }
    entry.template = {
      name,
      description,
      icon,
    };
  }
  return await Promise.all(
    entries
      .filter((entry) => entry.template != null)
      .map(async (entry) => ({
        id: `${entry.id}:${entry.data.RootTemplate}`,
        name: entry.template.name,
        description: entry.template.description,
        iconURL: (await getIconAsBase64URI(entry.template.icon)) ?? '#',
        linkURL: getWikiURL(entry.template.name),
        tags: ['Item'],
      })),
  );
}

async function getWeapons(file, translations) {
  const entries = await getStatFileAsJSON(file);
  for (const entry of entries) {
    if (!entry.data.RootTemplate) {
      continue;
    }
    const template = await getRootTemplate(entry.data.RootTemplate);
    if (!template) {
      continue;
    }
    const node = template.save.region[0].node[0].children[0].node[0];
    const name = node.attribute.translate('DisplayName', translations);
    const description = node.attribute.translate('Description', translations);
    const icon = node.attribute.select('Icon')?.$?.value;
    if (!name || !description) {
      continue;
    }
    entry.template = {
      name,
      description,
      icon,
    };
  }
  return await Promise.all(
    entries
      .filter((entry) => entry.template != null)
      .map(async (entry) => ({
        id: `${entry.id}:${entry.data.RootTemplate}`,
        name: entry.template.name,
        description: entry.template.description,
        iconURL: (await getIconAsBase64URI(entry.template.icon)) ?? '#',
        linkURL: getWikiURL(entry.template.name),
        tags: [
          'Item',
          entry.data.Rarity,
          'Equipment',
          'Weapon',
          entry.data['Damage Type'],
          entry.data.Damage,
          ...(entry.data['Weapon Properties']?.split(';') ?? []).map((value) =>
            value.replace('Twohanded', 'Two-Handed'),
          ),
          ...(entry.data['Proficiency Group']?.split(';') ?? []).map((value) =>
            value.substring(0, value.length - 1).replace('Weapon', ''),
          ),
        ].filter(Boolean),
      })),
  );
}

async function getOldEntities() {
  const oldDataTs = fs.readFileSync('./src/data.tsx', {
    encoding: 'utf8',
  });
  const oldData = oldDataTs
    .replace(/\n/gm, '')
    .replace(/^.*const data: Entity\[\] = /, 'var data = ')
    .replace(/export default data;/, 'module.exports = data;')
    .trim();
  const context = { module: { exports: {} } };
  vm.runInNewContext(oldData, context);
  return context.module.exports.reduce(
    (agg, entity) => ({ ...agg, [entity.name]: entity }),
    {},
  );
}

async function scrapeData() {
  const oldEntities = getOldEntities();

  const translations = await getEnglishTranslations();

  const entities = [
    ...(await getFeats(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/Feats/FeatDescriptions.lsx',
      translations,
    )),
    ...(await getArmor(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/Stats/Generated/Data/Armor.txt',
      translations,
    )),
    ...(await getArmor(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Gustav.pak/Public/Gustav/Stats/Generated/Data/Armor.txt',
      translations,
    )),
    ...(await getWeapons(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/Stats/Generated/Data/Weapon.txt',
      translations,
    )),
    ...(await getWeapons(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Gustav.pak/Public/Gustav/Stats/Generated/Data/Weapon.txt',
      translations,
    )),
  ];

  await fs.writeFileSync(
    './src/data.tsx',
    `import {Entity} from './Types';\n\nconst data: Entity[] = ${JSON.stringify(
      entities,
    )};\n\nexport default data;\n`,
    'utf8',
  );
}

scrapeData();
