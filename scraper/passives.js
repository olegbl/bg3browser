const { getFilePath } = require('./files');
const { logger } = require('./logger');
const { readAndParseStatFiles } = require('./statFileParser');

require('./boosts');
require('./translations');

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

let PASSIVES = {};

async function readPassives() {
  PASSIVES = await readAndParseStatFiles(PASSIVE_FILES);
}

String.prototype.toPassive = async function () {
  const id = String(this);
  const entry = PASSIVES[id];
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
  const boosts = entry.GetDataArray('Boosts').toBoosts();
  const properties = entry.GetDataArray('Properties');

  if (properties.includes('IsHidden')) {
    return null;
  }

  if (!name) {
    logger.warn(`could not find name for passive "${id}" (${nameHandle})`);
  }

  if (!name) {
    logger.warn(
      `could not find description for passive "${id}" (${descriptionHandle})`,
    );
  }

  return {
    id,
    name,
    description,
    descriptionParams,
    iconURL,
    boosts,
  };
};

module.exports = { readPassives };
