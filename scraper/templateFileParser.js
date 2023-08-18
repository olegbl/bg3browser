const fs = require('fs');

const { getFilePath } = require('./files');
const { logger } = require('./logger');
const { readXMLFile } = require('./xmlFileParser');

const TEMPLATES = {};

async function readTemplateFile(templateID) {
  if (TEMPLATES[templateID] != null) {
    return TEMPLATES[templateID];
  }
  const files = [
    getFilePath(
      'Shared.pak',
      `Public/Shared/RootTemplates/Extracted/${templateID}.lsx`,
    ),
    getFilePath(
      'Gustav.pak',
      `Public/Gustav/RootTemplates/Extracted/${templateID}.lsx`,
    ),
    getFilePath(
      'Shared.pak',
      `Public/SharedDev/RootTemplates/Extracted/${templateID}.lsx`,
    ),
    getFilePath(
      'Gustav.pak',
      `Public/GustavDev/RootTemplates/Extracted/${templateID}.lsx`,
    ),
  ];
  let json = null;
  for (const file of files) {
    if (await fs.existsSync(file)) {
      json = await readXMLFile(file);
      break;
    }
  }
  if (json == null) {
    logger.warn(`could not find .lsx file for template "${templateID}"`);
    return null;
  }
  const template = {};
  const attributes =
    json.save.region[0].node[0].children[0].node[0].attribute.filter(
      (attribute) => attribute != null,
    );
  for (const attribute of attributes) {
    const { id, value, handle } = attribute.$;
    template[id] = value ?? handle;
    if (id === 'ParentTemplateId' && value !== '') {
      template.ParentTemplate = await readTemplateFile(value);
    }
  }
  template.GetValue = (key) => {
    if (template[key]) {
      return template[key];
    }
    if (template.ParentTemplate != null) {
      return template.ParentTemplate.GetValue(key);
    }
    return null;
  };
  TEMPLATES[templateID] = template;
  return template;
}

module.exports = { readTemplateFile };
