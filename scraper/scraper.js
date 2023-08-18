const fs = require('fs');

const { logUntranslatedBoosts } = require('./boosts');
const { readIconFiles } = require('./iconFileParser');
const { getItems } = require('./items');
const { logger } = require('./logger');
const { readPassives } = require('./passives');
const { readEnglishTranslations } = require('./translations');

async function scrapeData() {
  const startTime = Date.now();

  await readEnglishTranslations();
  await readIconFiles();
  await readPassives();

  const items = await getItems();
  // TODO: spells & abilities
  // TODO: feats
  // TODO: class features

  logUntranslatedBoosts();

  await fs.writeFileSync(
    './src/data.tsx',
    `import {IEntity} from './Types';\n\nconst data: IEntity[] = ${JSON.stringify(
      [...items],
    )};\n\nexport default data;\n`,
    'utf8',
  );

  logger.info(`Scraping completed in ${Date.now() - startTime}ms`);
}

scrapeData();
