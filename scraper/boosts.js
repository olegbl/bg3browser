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
  const boost = String(this);
  if (boost == '') {
    return null;
  }

  // TODO: translate boosts somehow
  // e.g.:
  // CriticalHit(AttackTarget,Success,Never) = hf84b862bg8969g48d3g97b4g6e1e6c2e660a
  // IF(not HasPassive('MediumArmorMaster', context.Source)):Disadvantage(Skill,Stealth) = he577f2d6g0e94g49bag9f02g9b319c2be0d9 where [1] = Stealth

  if (!UNTRANSLATED_BOOSTS.has(boost)) {
    UNTRANSLATED_BOOSTS.add(boost);
  }
  return this;
};

String.prototype.isBoostShown = function () {
  const boost = String(this);
  if (boost == '' || this === 'WeaponProperty(Magical)') {
    return false;
  }
  return true;
};

function logUntranslatedBoosts() {
  logger.debug(
    [
      `Could not find translations for the following boosts:`,
      ...UNTRANSLATED_BOOSTS,
    ].join('\n - '),
  );
}

module.exports = { logUntranslatedBoosts };
