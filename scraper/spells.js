const { getFilePath } = require('./files');
const { readAndParseStatFiles } = require('./statFileParser');

const FILENAMES = [
  'Spell_Projectile.txt',
  'Spell_ProjectileStrike.txt',
  'Spell_Rush.txt',
  'Spell_Shout.txt',
  'Spell_Target.txt',
  'Spell_Teleportation.txt',
  'Spell_Throw.txt',
  'Spell_Wall.txt',
  'Spell_Zone.txt',
];

const LOCATIONS = [
  ['Shared.pak', 'Public/Shared/Stats/Generated/Data/'],
  ['Gustav.pak', 'Public/Gustav/Stats/Generated/Data/'],
  ['Shared.pak', 'Public/SharedDev/Stats/Generated/Data/'],
  ['Gustav.pak', 'Public/GustavDev/Stats/Generated/Data/'],
];

const FILES = [];
for (const file of FILENAMES) {
  for (const [module, directory] of LOCATIONS) {
    FILES.push(getFilePath(module, directory + file));
  }
}

let SPELLS = {};

async function readSpells() {
  SPELLS = await readAndParseStatFiles(FILES);
}

String.prototype.toSpell = async function () {
  const id = String(this);
  const entry = SPELLS[id];
  if (entry == null) {
    return null;
  }

  const nameHandle = entry.GetData('DisplayName');
  const name = nameHandle?.translate() ?? '';
  const descriptionHandle = entry.GetData('Description');
  const description = descriptionHandle?.translate() ?? '';
  const descriptionParams = entry.GetDataArray('DescriptionParams');
  const icon = entry.GetData('Icon');
  const iconURL = icon == null ? null : await icon.toIconURI();

  if (!name) {
    logger.warn(`could not find name for spell "${id}" (${nameHandle})`);
  }

  if (!name) {
    logger.warn(
      `could not find description for spell "${id}" (${descriptionHandle})`,
    );
  }

  return {
    id,
    name,
    description,
    descriptionParams,
    iconURL,
  };
};

module.exports = { readSpells };
