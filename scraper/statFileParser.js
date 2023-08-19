const fs = require('fs');

const { logger } = require('./logger');

function unquote(value) {
  return value.substring(1, value.length - 1);
}

const statRegex = /^[^"]* |".*?"| /g;

async function readStatFile(file) {
  if (!(await fs.existsSync(file))) {
    return null;
  }
  logger.debug(`reading stat file ${file}`);
  const rawData = await fs.readFileSync(file);
  const lines = String(rawData).split('\n');
  const entries = {};
  let entry = null;
  for (const line of lines) {
    const tokens = line.match(statRegex)?.filter((token) => token != ' ') ?? [];
    if (tokens.length === 0) {
      continue;
    }
    const id = unquote(tokens[1]);
    if (id == null || id === '') {
      logger.warn(`invalid stat entry ${line}`);
      continue;
    }
    if (tokens[0] === 'new entry ') {
      entry = { id, data: {} };
      entries[id] = entry;
    }
    if (tokens[0] === 'type ') {
      entry.type = unquote(tokens[1]);
    }
    if (tokens[0] === 'using ') {
      entry.using = unquote(tokens[1]);
    }
    if (tokens[0] === 'data ') {
      entry.data[unquote(tokens[1])] = unquote(tokens[2]);
    }
  }
  return entries;
}

async function readAndParseStatFiles(files) {
  // fetch all entries
  let entries = {};
  for (const file of files) {
    const newEntries = await readStatFile(file);
    entries = { ...entries, ...newEntries };
  }

  // process entries
  for (const entry of Object.values(entries)) {
    if (entry.using != null) {
      entry.parent = entries[entry.using];
    }
    entry.GetValue = (key) => {
      if (entry[key] != null) {
        return entry[key];
      }
      if (entry.parent) {
        return entry.parent.GetValue(key);
      }
      return null;
    };
    entry.GetData = (key) => {
      if (entry.data && entry.data[key] != null) {
        return entry.data[key];
      }
      if (entry.parent) {
        return entry.parent.GetData(key);
      }
      return null;
    };
    entry.GetDataArray = (key) => {
      return (entry.GetData(key)?.split(';') ?? []).map((value) =>
        value.trim(),
      );
    };
  }

  return entries;
}

module.exports = { readStatFile, readAndParseStatFiles };
