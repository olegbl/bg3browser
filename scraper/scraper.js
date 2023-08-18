const fs = require('fs');

const { logger } = require('./logger');
const { logUntranslatedBoosts } = require('./boosts');
const { readAndParseStatFiles } = require('./statFileParser');
const { readIconFiles } = require('./iconFileParser');
const { getFilePath } = require('./files');
const { readXMLFile } = require('./xmlFileParser');
const { readEnglishTranslations } = require('./translations');
const { readCurrentData } = require('./dataParser');
const { readPassives } = require('./passives');

function getWikiURL(name) {
  return `https://bg3.wiki/wiki/${name.replace(/ /g, '_')}`;
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
      json = await readXMLFile(file);
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

async function getFeats(file) {
  const feats = await readXMLFile(file);
  return feats.save.region[0].node[0].children[0].node.map((child) => {
    const id = child.attribute.findNode('UUID').$.value;
    const name = child.attribute.translate('DisplayName') ?? '';
    const description = child.attribute.translate('Description') ?? '';
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

const ITEM_FILES = [
  getFilePath('Shared.pak', 'Public/Shared/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Gustav.pak', 'Public/Gustav/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Shared.pak', 'Public/SharedDev/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Gustav.pak', 'Public/GustavDev/Stats/Generated/Data/Weapon.txt'),
  getFilePath('Shared.pak', 'Public/Shared/Stats/Generated/Data/Armor.txt'),
  getFilePath('Gustav.pak', 'Public/Gustav/Stats/Generated/Data/Armor.txt'),
  getFilePath('Shared.pak', 'Public/SharedDev/Stats/Generated/Data/Armor.txt'),
  getFilePath('Gustav.pak', 'Public/GustavDev/Stats/Generated/Data/Armor.txt'),
];

async function getItems() {
  const entries = await readAndParseStatFiles(ITEM_FILES);

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
    const name = nameHandle?.translate();
    if (!name) {
      logger.warn(`could not find name for item "${entry.id}" (${nameHandle})`);
    }

    const descriptionHandle = template.GetValue('Description');
    const description = descriptionHandle?.translate();
    if (!name) {
      logger.warn(
        `could not find description for item "${entry.id}" (${descriptionHandle})`,
      );
    }

    if (!name) {
      logger.warn(`could not find name for item "${entry.id}"`);
      continue;
    }
    const iconURL = await template.GetValue('Icon').toIconURI();
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

    let boosts = [
      ...(entry.GetData('Boosts')?.toBoosts() ?? []),
      ...(entry.GetData('DefaultBoosts')?.toBoosts() ?? []),
      ...(entry.GetData('BoostsOnEquipMainHand')?.toBoosts() ?? []),
    ];

    const passiveIDs = [
      ...(entry.GetData('PassivesMainHand')?.split(';') ?? []),
      ...(entry.GetData('PassivesOnEquip')?.split(';') ?? []),
    ];
    const passives = [];
    for (const passiveID of passiveIDs) {
      const passive = await passiveID.toPassive();
      if (passive != null) {
        passives.push(passive);
      }
    }

    let armor = [];
    const armorClass = entry.GetData('ArmorClass');
    const armorClassAbility = entry.GetData('Armor Class Ability');
    const armorClassAbilityCap = entry.GetData('Ability Modifier Cap');
    if (armorClass != null) {
      // add base armor class
      armor.push(armorClass);

      // add armor class from boosts
      boosts = boosts.filter((boost) => {
        const enchantment = boost.id.match(/AC\((\d+)\)/);
        if (enchantment) {
          armor.push(enchantment[1]);
          return false;
        }

        return true;
      });

      // add armor class from attributes
      if (armorClassAbility != null && armorClassAbility !== 'None') {
        if (armorClassAbilityCap == null) {
          armor.push(armorClassAbility);
        } else {
          armor.push(`${armorClassAbility} (Max ${armorClassAbilityCap})`);
        }
      }

      // stringify
      armor = armor.join(' + ');
    }

    const damages = [];
    const damage = entry.GetData('Damage');
    const damageVersatile = entry.GetData('VersatileDamage');
    const damageType = entry.GetData('Damage Type');
    if (damage != null) {
      // add base damage
      damages.push([damage]);

      // add versatile damage
      if (damageVersatile != null) {
        damages.push([damageVersatile]);
      }

      // add damage type
      if ((damageType ?? '') !== '') {
        damages.forEach((d) => d?.push(` (${damageType})`));
      }

      // add damage from boosts
      boosts = boosts.filter((boost) => {
        const enchantment = boost.id.match(/WeaponEnchantment\((\d+)\)/);
        if (enchantment) {
          damages.forEach((d) => d?.push(enchantment[1]));
          return false;
        }

        const extra = boost.id.match(/WeaponDamage\(([^,]+), ([^\)]+)\)/);
        if (extra) {
          damages.forEach((d) => d?.push(`${extra[1]} (${extra[2]})`));
          return false;
        }

        return true;
      });

      // stringify
      for (let i = 0; i < damages.length; i++) {
        damages[i] = damages[i].join(' + ');
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
        armorClass: armor,
        boosts,
        damages,
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

async function scrapeData() {
  const startTime = Date.now();
  const data = readCurrentData();
  await readEnglishTranslations();
  await readIconFiles();
  await readPassives();

  const entities = [
    // ...(await getFeats(
    //   getFilePath('Shared.pak', 'Public/Shared/Feats/FeatDescriptions.lsx'),
    // )),
    ...(await getItems()),
  ];

  logUntranslatedBoosts();

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
