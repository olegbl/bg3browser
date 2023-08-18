const { getFilePath } = require('./files');
const { logger } = require('./logger');
const { readXMLFile } = require('./xmlFileParser');

const TRANSLATIONS = {};

async function readEnglishTranslations() {
  const english = await readXMLFile(
    getFilePath('English.pak', 'Localization/English/english.xml'),
  );
  for (const item of english.contentList.content) {
    TRANSLATIONS[item.$.contentuid] = item._.trim();
  }
}

String.prototype.translate = function () {
  if (this == null) {
    return null;
  }
  const [id, version] = this.split(';');
  // ignore the version for now - it doesn't seem like multiple versions
  // of the same translated string are included in the shipped game data
  const translation = TRANSLATIONS[id];
  if (translation == null) {
    logger.warn(`could not find translation for handle "${id}"`);
    return '';
  }
  return translation;
};

Array.prototype.translate = function (value, key = 'id') {
  return this.findNode(value, key)?.$?.handle?.translate();
};

module.exports = { readEnglishTranslations };
