const { logger } = require('./logger');

const UNTRANSLATED_BOOSTS = new Set();

String.prototype.toBoosts = function () {
  return this.split(';')
    .map((boost) => boost.trim())
    .filter((boost) => boost.isBoostShown())
    .map((boost) => ({
      id: boost,
      label: boost.translateBoost(),
    }));
};

String.prototype.translateBoost = function () {
  if (this.trim() == '') {
    return null;
  }
  if (!UNTRANSLATED_BOOSTS.has(String(this))) {
    UNTRANSLATED_BOOSTS.add(String(this));
  }
  return this;
};

String.prototype.isBoostShown = function () {
  if (this === '' || this === 'WeaponProperty(Magical)') {
    return false;
  }
  return true;
};

function logUntranslatedBoosts() {
  logger.warn(
    [
      `Could not find translations for the following boosts:`,
      ...UNTRANSLATED_BOOSTS,
    ].join('\n - '),
  );
}

module.exports = { logUntranslatedBoosts };
