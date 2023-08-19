const { logger } = require('./logger');

const TRANSLATED_BOOSTS = [
  {
    regex: /^CriticalHit\(AttackTarget,Success,Never\)$/,
    handle: 'hf84b862bg8969g48d3g97b4g6e1e6c2e660a',
    params: (match) => [],
  },
  {
    regex:
      /^IF\(not HasPassive\('MediumArmorMaster', context.Source\)\):Disadvantage\(Skill,(.*?)\)$/,
    handle: 'he577f2d6g0e94g49bag9f02g9b319c2be0d9',
    params: (match) => [match[1]],
  },
  {
    regex: /^Disadvantage\(Skill,(.*?)\)$/,
    handle: 'he577f2d6g0e94g49bag9f02g9b319c2be0d9',
    params: (match) => [match[1]],
  },
  // TODO: find translation handles for other boosts
];

const UNTRANSLATED_BOOSTS = new Set();

Array.prototype.toBoosts = function () {
  return this.filter(
    (boost) =>
      (boost ?? '') !== '' &&
      // already handled by tags
      boost !== 'WeaponProperty(Magical)',
  ).map((boost) => ({
    id: boost,
    description: boost,
    descriptionParams: [],
    ...translateBoost(boost),
  }));
};

function translateBoost(boost) {
  if (boost == '') {
    return null;
  }

  for (const translation of TRANSLATED_BOOSTS) {
    const match = boost.match(translation.regex);
    if (match) {
      return {
        description: translation.handle.translate(),
        descriptionParams: translation.params(match),
      };
    }
  }

  if (!UNTRANSLATED_BOOSTS.has(boost)) {
    UNTRANSLATED_BOOSTS.add(boost);
  }

  return null;
}

function logUntranslatedBoosts() {
  logger.debug(
    [
      `Could not find translations for the following boosts:`,
      ...UNTRANSLATED_BOOSTS,
    ].join('\n - '),
  );
}

module.exports = { logUntranslatedBoosts };
