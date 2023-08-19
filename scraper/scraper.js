const fs = require('fs');

const { logUntranslatedBoosts } = require('./boosts');
const { readIconFiles } = require('./iconFileParser');
const { getIncludedIcons } = require('./icons');
const { getItems } = require('./items');
const { logger } = require('./logger');
const { readPassives } = require('./passives');
const { readSpells } = require('./spells');
const { readEnglishTranslations } = require('./translations');

async function scrapeData() {
  const startTime = Date.now();

  await readEnglishTranslations();
  await readIconFiles();
  await readSpells();
  await readPassives();

  const items = await getItems();
  // TODO: spells & abilities
  // TODO: feats
  // TODO: class features

  logUntranslatedBoosts();

  const data = JSON.stringify([...items]);
  const icons = JSON.stringify(getIncludedIcons());

  await fs.writeFileSync(
    './src/data.tsx',
    `import {IEntity, IIcons} from './Types';

export const data: IEntity[] = ${data};
export const icons: IIcons = ${icons};
`,
    'utf8',
  );

  logger.info(`Scraping completed in ${Date.now() - startTime}ms`);
}

scrapeData();
