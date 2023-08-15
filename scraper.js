const fs = require('fs');
const vm = require('vm');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

Array.prototype.select = function (value, key = 'id') {
  return this.find((item) => item?.$ != null && item?.$[key] === value);
};

function getWikiURL(name) {
  return `https://bg3.wiki/wiki/${name.replace(' ', '_')}`;
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

async function getFeats(file, english) {
  const feats = await getXMLFileAsJSON(file);
  return feats.save.region[0].node[0].children[0].node.map((child) => {
    const id = child.attribute.select('UUID').$.value;
    const name = english[child.attribute.select('DisplayName').$.handle];
    const description = english[child.attribute.select('Description').$.handle];
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

async function getArmor(file, english) {
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
    const name = english[node.attribute.select('DisplayName')?.$?.handle];
    const description =
      english[node.attribute.select('Description')?.$?.handle];
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
  return entries
    .filter((entry) => entry.template != null)
    .map((entry) => ({
      id: `${entry.id}:${entry.data.RootTemplate}`,
      name: entry.template.name,
      description: entry.template.description,
      iconURL: '',
      linkURL: getWikiURL(entry.template.name),
      tags: ['Item'],
    }));
}

async function getWeapons(file, english) {
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
    const name = english[node.attribute.select('DisplayName')?.$?.handle];
    const description =
      english[node.attribute.select('Description')?.$?.handle];
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
  return entries
    .filter((entry) => entry.template != null)
    .map((entry) => ({
      id: `${entry.id}:${entry.data.RootTemplate}`,
      name: entry.template.name,
      description: entry.template.description,
      iconURL: '',
      linkURL: getWikiURL(entry.template.name),
      tags: ['Item'],
    }));
}

async function scrapeData() {
  const oldEntities = getOldEntities();

  const english = await getEnglishTranslations();

  const entities = [
    ...(await getFeats(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/Feats/FeatDescriptions.lsx',
      english,
    )),
    ...(await getArmor(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/Stats/Generated/Data/Armor.txt',
      english,
    )),
    ...(await getArmor(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Gustav.pak/Public/Gustav/Stats/Generated/Data/Armor.txt',
      english,
    )),
    ...(await getWeapons(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Shared.pak/Public/Shared/Stats/Generated/Data/Weapon.txt',
      english,
    )),
    ...(await getWeapons(
      'C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted Gustav.pak/Public/Gustav/Stats/Generated/Data/Weapon.txt',
      english,
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
