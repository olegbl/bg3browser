const { logger } = require('./logger');
const { readAndParseStatFiles } = require('./statFileParser');
const { getFilePath } = require('./files');
const { readTemplateFile } = require('./templateFileParser');
const { processTags } = require('./tags');
const { includeIcon } = require('./icons');

function getWikiURL(name) {
  return `https://bg3.wiki/wiki/${name.replace(/ /g, '_')}`;
}

const ITEM_SLOTS = {
  Amulet: ['Amulet'],
  Boots: ['Boots'],
  Breast: ['Breast'],
  Cloak: ['Cloak'],
  Gloves: ['Gloves'],
  Helmet: ['Helmet'],
  'Melee Main Weapon': ['Weapon', 'Melee'],
  'Melee Offhand Weapon': ['Weapon', 'Melee', 'Offhand'],
  MusicalInstrument: ['Musical Instrument'],
  'Ranged Main Weapon': ['Weapon', 'Ranged'],
  Ring: ['Ring'],
  Underwear: ['Underwear'],
  VanityBody: ['Camp Outfit'],
  VanityBoots: ['Camp Boots'],
};

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
    const template = await readTemplateFile(templateID);
    if (!template) {
      logger.warn(`could not find template for item "${entry.id}"`);
      continue;
    }

    const nameHandle = template.GetValue('DisplayName');
    const name = nameHandle?.translate() ?? '';
    if (!name) {
      logger.warn(`could not find name for item "${entry.id}" (${nameHandle})`);
    }

    const descriptionHandle = template.GetValue('Description');
    const description = descriptionHandle?.translate() ?? '';
    if (!name) {
      logger.warn(
        `could not find description for item "${entry.id}" (${descriptionHandle})`,
      );
    }

    if (!name) {
      logger.warn(`could not find name for item "${entry.id}"`);
      continue;
    }
    const icon = await includeIcon(template.GetValue('Icon'));

    if (entry.GetData('UseConditions') != null) {
      // items with these don't seem to be usable by players, so ignore them
      continue;
    }

    const rarity = entry.GetData('Rarity') ?? 'Common';
    const slots = ITEM_SLOTS[entry.GetData('Slot')] ?? [];
    const properties = entry.GetDataArray('Weapon Properties');
    const groups = entry.GetDataArray('Proficiency Group');

    // get boosts
    let boosts = [
      ...entry.GetDataArray('Boosts').toBoosts(),
      ...entry.GetDataArray('DefaultBoosts').toBoosts(),
      ...entry.GetDataArray('BoostsOnEquipMainHand').toBoosts(),
    ];

    // get passives
    const passiveIDs = [
      ...entry.GetDataArray('PassivesMainHand'),
      ...entry.GetDataArray('PassivesOnEquip'),
    ];
    const passives = [];
    for (const passiveID of passiveIDs) {
      const passive = await passiveID.toPassive();
      if (passive != null) {
        passives.push(passive);
      }
    }

    // get spells / abilities
    let spells = [];
    boosts = boosts.filter((boost) => {
      const match = boost.id.match(/^UnlockSpell\((.*)\)$/);
      if (match) {
        spells.push(match[1]);
        return false;
      }

      return true;
    });
    for (let i = 0; i < spells.length; i++) {
      spells[i] = await spells[i].toSpell();
    }
    spells = spells.filter((spell) => spell != null);

    let armorClass = null;
    const armorClassBase = entry.GetData('ArmorClass');
    const armorClassAbility = entry.GetData('Armor Class Ability');
    const armorClassAbilityCap = entry.GetData('Ability Modifier Cap');
    if (armorClassBase != null) {
      // add base armor class
      armorClass = [armorClassBase];

      // add armor class from boosts
      boosts = boosts.filter((boost) => {
        const enchantment = boost.id.match(/AC\((\d+)\)/);
        if (enchantment) {
          armorClass.push(enchantment[1]);
          return false;
        }

        return true;
      });

      // add armor class from attributes
      if (armorClassAbility != null && armorClassAbility !== 'None') {
        if ((armorClassAbilityCap ?? '') === '') {
          armorClass.push(`${armorClassAbility} Modifier`);
        } else {
          armorClass.push(
            `${armorClassAbility} Modifier (Max ${armorClassAbilityCap})`,
          );
        }
      }

      // stringify
      armorClass = armorClass.join(' + ');
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
        damages.forEach((d) => {
          if (d != null && d.length > 0) {
            d[0] = `${d[0]} (${damageType})`;
          }
        });
      }

      // add damage from boosts
      boosts = boosts.filter((boost) => {
        const enchantment = boost.id.match(/WeaponEnchantment\((\d+)\)/);
        if (enchantment) {
          damages.forEach((d) => d?.push(`${enchantment[1]} (Enchantment)`));
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
      icon,
      linkURL: getWikiURL(name),
      tags: processTags([
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
        armorClass,
        boosts,
        damages,
        food: entry.GetData('SupplyValue'),
        passives,
        range: entry.GetData('WeaponRange'),
        rarity,
        spells,
        templateID,
        weight: entry.GetData('Weight'),
      },
    });
  }

  return items;
}

module.exports = { getItems };
