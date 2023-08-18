const fs = require('fs');
const xml2js = require('xml2js');

const { logger } = require('./logger');

const parser = new xml2js.Parser();

async function readXMLFile(file) {
  logger.log(`reading xml file ${file}`);
  const rawData = await fs.readFileSync(file);
  return await parser.parseStringPromise(rawData);
}

Array.prototype.findNode = function (value, key = 'id') {
  return this.find((item) => item?.$ != null && item?.$[key] === value);
};

module.exports = { readXMLFile };
