const RARITIES = {
  Common: ['Common'],
  Uncommon: ['Uncommon'],
  Rare: ['Rare'],
  VeryRare: ['Very Rare'],
  Legendary: ['Legendary'],
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

function processTags(tags) {
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

module.exports = { processTags };
