const fs = require('fs');
const sharp = require('sharp');
const toArrayBuffer = require('buffer-to-arraybuffer');
const vm = require('vm');
const xml2js = require('xml2js');
const ddsParser = require('dds-parser');
const pngjs = require('pngjs');

const parser = new xml2js.Parser();

const DEBUG = false;

const logger = {
  log: (...args) => DEBUG && console.log('[D]', ...args),
  info: (...args) => console.info('[I]', ...args),
  warn: (...args) => console.warn('[W]', ...args),
  error: (...args) => console.error('[E]', ...args),
};

Array.prototype.select = function (value, key = 'id') {
  return this.find((item) => item?.$ != null && item?.$[key] === value);
};

Array.prototype.translate = function (value, getTranslation, key = 'id') {
  return getTranslation(this.select(value, key)?.$?.handle);
};

function getFilePath(pack, relativePath) {
  return `C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted ${pack}/${relativePath}`;
}

function getWikiURL(name) {
  return `https://bg3.wiki/wiki/${name.replace(/ /g, '_')}`;
}

function unquote(value) {
  return value.substring(1, value.length - 1);
}

function cleanTags(tags) {
  const cleanedTags = [];
  for (const tag of tags) {
    if (tag == null) {
      continue;
    }
    const subtags = PROPERTIES[tag] ??
      PROFICIENCY_GROUPS[tag] ??
      RARITIES[tag] ?? [tag];
    cleanedTags.push(...subtags);
  }
  // apply one handed tag if weapon is not two handed or versatile
  if (
    cleanedTags.includes('Weapon') &&
    !cleanedTags.includes('Two Handed') &&
    !cleanedTags.includes('Versatile')
  ) {
    cleanedTags.push('One Handed');
  }
  // unique tags
  return Array.from(new Set(cleanedTags));
}

const RARITIES = {
  Common: ['Common'],
  Uncommon: ['Uncommon'],
  Rare: ['Rare'],
  VeryRare: ['Very Rare'],
  Legendary: ['Legendary'],
};

const ITEM_SLOTS = {
  Amulet: ['Amulet'],
  Boots: ['Boots'],
  Breast: ['Breast'],
  Cloak: ['Cloak'],
  Gloves: ['Gloves'],
  Helmet: ['Helmet'],
  'Melee Main Weapon': ['Weapon', 'Melee'],
  'Melee Offhand Weapon': ['Weapon', 'Offhand'],
  MusicalInstrument: ['Musical Instrument'],
  'Ranged Main Weapon': ['Weapon', 'Ranged'],
  Ring: ['Ring'],
  Underwear: ['Underwear'],
  VanityBody: ['Camp Outfit'],
  VanityBoots: ['Camp Boots'],
};

const PROPERTIES = {
  AddToHotbar: [], // internal
  Ammunition: ['Ammunition'],
  Dippable: ['Dippable'],
  Finesse: ['Finesse'],
  Heavy: ['Heavy'],
  Light: ['Light'],
  Loading: [], // not implemented
  Magical: ['Magical'],
  Melee: [], // duplicative of item slot
  NoDualWield: [], // internal
  NotSheathable: [], // internal
  Reach: ['Reach'],
  Thrown: ['Thrown'],
  Torch: ['Torch'],
  Twohanded: ['Two Handed'],
  Unstowable: ['Unstowable'],
  Versatile: ['Versatile'],
};

const PROFICIENCY_GROUPS = {
  Battleaxes: ['Battleaxe'],
  Clubs: ['Club'],
  Daggers: ['Dagger'],
  Darts: ['Dart'],
  Flails: ['Flail'],
  Glaives: ['Glaive'],
  Greataxes: ['Greataxe'],
  Greatclubs: ['Greatclub'],
  Greatswords: ['Greatsword'],
  Halberds: ['Halberd'],
  Handaxes: ['Handaxe'],
  HandCrossbows: ['Hand Crossbow'],
  HeavyArmor: ['Heavy'],
  HeavyCrossbows: ['Heavy Crossbow'],
  Javelins: ['Javelin'],
  LightArmor: ['Light'],
  LightCrossbows: ['Light Crossbow'],
  LightHammers: ['Light Hammer'],
  Longbows: ['Longbow'],
  Longswords: ['Longsword'],
  Maces: ['Mace'],
  MartialWeapons: ['Martial Weapon'],
  Mauls: ['Maul'],
  MediumArmor: ['Medium'],
  Morningstars: ['Morningstar'],
  MusicalInstrument: [], // duplicative of item slot
  Pikes: ['Pike'],
  Quarterstaffs: ['Quarterstaff'],
  Rapiers: ['Rapier'],
  Scimitars: ['Scimitar'],
  Shields: ['Shields'],
  Shortbows: ['Shortbow'],
  Shortswords: ['Shortsword'],
  Sickles: ['Sickle'],
  SimpleWeapons: ['Simple Weapon'],
  Slings: ['Sling'],
  Spears: ['Spear'],
  Tridents: ['Trident'],
  Warhammers: ['Warhammer'],
  Warpicks: ['Warpick'],
};

const statRegex = /^[^"]* |".*?"| /g;
async function getStatFileAsJSON(file) {
  logger.log(`reading txt file ${file}`);
  const rawData = await fs.readFileSync(file);
  const lines = String(rawData).split('\n');
  const entries = {};
  let entry = null;
  for (const line of lines) {
    const tokens = line.match(statRegex)?.filter((token) => token != ' ') ?? [];
    if (tokens.length === 0) {
      continue;
    }
    const id = unquote(tokens[1]);
    if (id == null || id === '') {
      logger.warn(`invalid stat entry ${line}`);
      continue;
    }
    if (tokens[0] === 'new entry ') {
      entry = { id, data: {} };
      entries[id] = entry;
    }
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

const ICON_FILES = [
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_2.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_2.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_3.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_3.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_4.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_4.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_5.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_5.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_6.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_6.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/SharedDev/GUI/Icons_Items_Dev.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/SharedDev/Assets/Textures/Icons/Icons_Items_Dev.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/New_EquipmentIcons.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/New_EquipmentIcons.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Skills.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Skills.dds',
    ),
  ],
];

async function getDDSFileAsPNGBuffer(file) {
  logger.log(`reading dds file ${file}`);
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
  return { pngBuffer: pngjs.PNG.sync.write(png), imageWidth, imageHeight };
}

async function getIcons() {
  const buffers = {};
  const icons = {};
  await Promise.all(
    ICON_FILES.map(async ([lsxPath, ddsPath]) => {
      // read dds file
      buffers[ddsPath] = await getDDSFileAsPNGBuffer(ddsPath);

      // read xml file
      const xml = await getXMLFileAsJSON(lsxPath);
      xml.save.region.forEach((region) =>
        region.node[0].children[0].node.forEach((node) => {
          const iconID = node.attribute.select('MapKey')?.$?.value;
          if (iconID == null) {
            return;
          }
          const xStart = parseFloat(node.attribute.select('U1').$.value);
          const xEnd = parseFloat(node.attribute.select('U2').$.value);
          const yStart = parseFloat(node.attribute.select('V1').$.value);
          const yEnd = parseFloat(node.attribute.select('V2').$.value);
          icons[iconID] = { xStart, xEnd, yStart, yEnd, ddsPath };
        }),
      );
    }),
  );
  async function getIconURI(iconID) {
    return new Promise(async (resolve, reject) => {
      const { xStart, xEnd, yStart, yEnd, ddsPath } =
        icons[iconID] ?? icons['Generated_' + iconID] ?? {};
      if (ddsPath == null) {
        logger.warn(`could not find metadata for icon "${iconID}"`);
        resolve(null);
        return;
      }
      const { pngBuffer, imageWidth, imageHeight } = buffers[ddsPath] ?? {};
      if (pngBuffer == null) {
        logger.warn(`could not find texture for icon "${iconID}" (${ddsPath})`);
        resolve(null);
        return;
      }
      const left = Math.floor(xStart * imageWidth);
      const top = Math.floor(yStart * imageHeight);
      const width = Math.floor((xEnd - xStart) * imageWidth);
      const height = Math.floor((yEnd - yStart) * imageHeight);
      sharp(pngBuffer)
        .extract({ left, top, width, height })
        .toBuffer((error, buffer) => {
          if (error) {
            logger.error(error.toString());
            resolve(null);
            return;
          }
          resolve(`data:image/png;base64,${buffer.toString('base64')}`);
        });
    });
  }
  return getIconURI;
}

async function getXMLFileAsJSON(file) {
  logger.log(`reading xml file ${file}`);
  const rawData = await fs.readFileSync(file);
  return await parser.parseStringPromise(rawData);
}

const templateCache = {};
async function getTemplate(templateID) {
  if (templateCache[templateID] != null) {
    return templateCache[templateID];
  }
  const files = [
    getFilePath(
      'Shared.pak',
      `Public/Shared/RootTemplates/Extracted/${templateID}.lsx`,
    ),
    getFilePath(
      'Gustav.pak',
      `Public/Gustav/RootTemplates/Extracted/${templateID}.lsx`,
    ),
    getFilePath(
      'Shared.pak',
      `Public/SharedDev/RootTemplates/Extracted/${templateID}.lsx`,
    ),
    getFilePath(
      'Gustav.pak',
      `Public/GustavDev/RootTemplates/Extracted/${templateID}.lsx`,
    ),
  ];
  let json = null;
  for (const file of files) {
    if (await fs.existsSync(file)) {
      json = await getXMLFileAsJSON(file);
      break;
    }
  }
  if (json == null) {
    logger.warn(`could not find .lsx file for template "${templateID}"`);
    return null;
  }
  const template = {};
  const attributes =
    json.save.region[0].node[0].children[0].node[0].attribute.filter(
      (attribute) => attribute != null,
    );
  for (const attribute of attributes) {
    const { id, value, handle } = attribute.$;
    template[id] = value ?? handle;
    if (id === 'ParentTemplateId' && value !== '') {
      template.ParentTemplate = await getTemplate(value);
    }
  }
  template.GetValue = (key) => {
    if (template[key]) {
      return template[key];
    }
    if (template.ParentTemplate != null) {
      return template.ParentTemplate.GetValue(key);
    }
    return null;
  };
  templateCache[templateID] = template;
  return template;
}

async function getEnglishTranslations() {
  const english = await getXMLFileAsJSON(
    getFilePath('English.pak', 'Localization/English/english.xml'),
  );
  const translations = {};
  for (const item of english.contentList.content) {
    translations[item.$.contentuid] = item._;
  }
  return function getTranslation(handle) {
    if (handle == null) {
      return null;
    }
    const [id, version] = handle.split(';');
    // ignore the version for now - it doesn't seem like multiple versions
    // of the same translated string are included in the shipped game data
    return translations[id];
  };
}

async function getFeats(file, getTranslation) {
  const feats = await getXMLFileAsJSON(file);
  return feats.save.region[0].node[0].children[0].node.map((child) => {
    const id = child.attribute.select('UUID').$.value;
    const name = child.attribute.translate('DisplayName', getTranslation) ?? '';
    const description =
      child.attribute.translate('Description', getTranslation) ?? '';
    return {
      id,
      name,
      description,
      iconURL: '',
      linkURL: getWikiURL(name),
      tags: ['Feat'],
      metadata: {},
    };
  });
}

async function getEntriesFromStatFiles(files) {
  // fetch all entries
  let entries = {};
  for (const file of files) {
    const newEntries = await getStatFileAsJSON(file);
    entries = { ...entries, ...newEntries };
  }

  // process entries
  for (const entry of Object.values(entries)) {
    if (entry.using != null) {
      entry.parent = entries[entry.using];
    }
    entry.GetValue = (key) => {
      if (entry[key]) {
        return entry[key];
      }
      if (entry.parent) {
        return entry.parent.GetValue(key);
      }
      return null;
    };
    entry.GetData = (key) => {
      if (entry.data && entry.data[key]) {
        return entry.data[key];
      }
      if (entry.parent) {
        return entry.parent.GetData(key);
      }
      return null;
    };
  }

  return entries;
}

const PASSIVE_FILES = [
  getFilePath('Shared.pak', 'Public/Shared/Stats/Generated/Data/Passive.txt'),
  getFilePath('Gustav.pak', 'Public/Gustav/Stats/Generated/Data/Passive.txt'),
  getFilePath(
    'Shared.pak',
    'Public/SharedDev/Stats/Generated/Data/Passive.txt',
  ),
  getFilePath(
    'Gustav.pak',
    'Public/GustavDev/Stats/Generated/Data/Passive.txt',
  ),
];

async function getPassives(getTranslation, getIconURI) {
  const entries = await getEntriesFromStatFiles(PASSIVE_FILES);
  return async function getPassive(id) {
    const entry = entries[id];
    if (entry == null) {
      return null;
    }

    const nameHandle = entry.GetData('DisplayName');
    const name = getTranslation(nameHandle) ?? '';
    if (!name) {
      logger.warn(`could not find name for passive "${id}" (${nameHandle})`);
    }

    const descriptionHandle = entry.GetData('Description');
    const description = getTranslation(descriptionHandle) ?? '';
    if (!name) {
      logger.warn(
        `could not find description for passive "${id}" (${descriptionHandle})`,
      );
    }

    const descriptionParams =
      entry.GetData('DescriptionParams')?.split('; ') ?? [];

    const icon = entry.GetData('Icon');
    const iconURL = icon == null ? null : await getIconURI(icon);

    // TODO: prettify for human consumption
    const boosts = (entry.GetData('Boosts')?.split(';') ?? []).filter(Boolean);

    return {
      id,
      name,
      description,
      descriptionParams,
      iconURL,
      boosts,
    };
  };
}

const ITEM_FILES = [
  getFilePath('Shared.pak', 'Public/Shared/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Gustav.pak', 'Public/Gustav/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Shared.pak', 'Public/SharedDev/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Gustav.pak', 'Public/GustavDev/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Shared.pak', 'Public/Shared/Stats/Generated/Data/Armor.txt'),
  getFilePath('Gustav.pak', 'Public/Gustav/Stats/Generated/Data/Armor.txt'),
  getFilePath('Shared.pak', 'Public/SharedDev/Stats/Generated/Data/Armor.txt'),
  getFilePath('Gustav.pak', 'Public/GustavDev/Stats/Generated/Data/Armor.txt'),
  // TODO: Object.txt?
];

async function getItems(getTranslation, getIconURI, getPassive) {
  const entries = await getEntriesFromStatFiles(ITEM_FILES);

  // parse items from entries
  const items = [];
  for (const entry of Object.values(entries)) {
    const templateID = entry.GetData('RootTemplate');
    if (!templateID) {
      logger.warn(`could not find template id for item "${entry.id}"`);
      continue;
    }
    const template = await getTemplate(templateID);
    if (!template) {
      logger.warn(`could not find template for item "${entry.id}"`);
      continue;
    }

    const nameHandle = template.GetValue('DisplayName');
    const name = getTranslation(nameHandle) ?? '';
    if (!name) {
      logger.warn(`could not find name for item "${entry.id}" (${nameHandle})`);
    }

    const descriptionHandle = template.GetValue('Description');
    const description = getTranslation(descriptionHandle) ?? '';
    if (!name) {
      logger.warn(
        `could not find description for item "${entry.id}" (${descriptionHandle})`,
      );
    }

    if (!name) {
      logger.warn(`could not find name for item "${entry.id}"`);
      continue;
    }
    const iconURL = await getIconURI(template.GetValue('Icon'));
    if (!iconURL) {
      logger.warn(`could not find icon for item "${name}"`);
    }

    if (entry.GetData('UseConditions') != null) {
      // items with these don't seem to be usable by players, so ignore them
      continue;
    }

    const rarity = entry.GetData('Rarity') ?? 'Common';
    const slots = ITEM_SLOTS[entry.GetData('Slot')] ?? [];
    const properties = entry.GetData('Weapon Properties')?.split(';') ?? [];
    const groups = entry.GetData('Proficiency Group')?.split(';') ?? [];

    const armorClass = entry.GetData('ArmorClass');
    const armorClassAbility = entry.GetData('Armor Class Ability');
    const armorClassAbilityCap = entry.GetData('Ability Modifier Cap');
    const armorClassTotal = [
      armorClass,
      armorClassAbility == null || armorClassAbility === 'None'
        ? null
        : `${armorClassAbilityCap} (${armorClassAbility})`,
    ]
      .filter(Boolean)
      .join(' + ');

    const damageType = entry.GetData('Damage Type');
    const damage = entry.GetData('Damage');
    const damageVersatile = entry.GetData('VersatileDamage');
    const damageBoosts = (entry.GetData('DefaultBoosts') ?? '')
      .split(';')
      .map((boost) => {
        const enchantment = boost.match(/WeaponEnchantment\((\d+)\)/);
        if (enchantment) {
          return enchantment[1];
        }
        const extra = boost.match(/WeaponDamage\(([^,]+), ([^\)]+)\)/);
        if (extra) {
          return `${extra[1]} (${extra[2]})`;
        }
        return null;
      })
      .filter((boost) => boost != null);
    const damageTotal = [
      damageType == null ? damage : `${damage} (${damageType})`,
      ...damageBoosts,
    ].join(' + ');
    const damageVersatileTotal =
      damageVersatile == null
        ? null
        : [
            damageType == null ? damage : `${damageVersatile} (${damageType})`,
            ...damageBoosts,
          ].join(' + ');

    // TODO: prettify for human consumption
    const boosts = [
      ...(entry.GetData('Boosts')?.split(';') ?? []),
      ...(entry.GetData('DefaultBoosts')?.split(';') ?? []),
      ...(entry.GetData('BoostsOnEquipMainHand')?.split(';') ?? []),
    ]
      .filter(Boolean)
      .filter(
        (boost) =>
          // handle that in damage calculations above
          !boost.startsWith('WeaponEnchantment') &&
          !boost.startsWith('WeaponEnchantment') &&
          boost != 'WeaponProperty(Magical)',
      );

    const passiveIDs = [
      ...(entry.GetData('PassivesMainHand')?.split(';') ?? []),
      ...(entry.GetData('PassivesOnEquip')?.split(';') ?? []),
    ];
    const passives = [];
    for (const passiveID of passiveIDs) {
      const passive = await getPassive(passiveID);
      if (passive != null) {
        passives.push(passive);
      }
    }

    items.push({
      id: `${entry.id}:${templateID}`,
      name,
      description,
      iconURL: iconURL ?? '#',
      linkURL: getWikiURL(name),
      tags: cleanTags([
        'Item',
        rarity,
        entry.GetData('Unique') === '1' ? 'Unique' : null,
        'Equipment',
        ...slots,
        ...properties,
        ...groups,
        damageType,
      ]),
      metadata: {
        armorClass: armorClassTotal,
        boosts,
        damage: damageTotal,
        damageVersatile: damageVersatileTotal,
        food: entry.GetData('SupplyValue'),
        passives,
        range: entry.GetData('WeaponRange'),
        rarity,
        templateID,
        weight: entry.GetData('Weight'),
      },
    });
  }

  return items;
}

async function getExistingData() {
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
  const startTime = Date.now();
  const data = getExistingData();
  const getTranslation = await getEnglishTranslations();
  const getIconURI = await getIcons();
  const getPassive = await getPassives(getTranslation, getIconURI);

  const entities = [
    // ...(await getFeats(
    //   getFilePath('Shared.pak', 'Public/Shared/Feats/FeatDescriptions.lsx'),
    //   getTranslation,
    //   getIconURI,
    // )),
    ...(await getItems(getTranslation, getIconURI, getPassive)),
  ];

  await fs.writeFileSync(
    './src/data.tsx',
    `import {Entity} from './Types';\n\nconst data: Entity[] = ${JSON.stringify(
      entities,
    )};\n\nexport default data;\n`,
    'utf8',
  );

  logger.info(`Scraping completed in ${Date.now() - startTime}ms`);
}

scrapeData();
