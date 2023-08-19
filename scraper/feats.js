const { getFilePath } = require('./files');
const { readXMLFile } = require('./xmlFileParser');

async function getFeats() {
  const file = getFilePath(
    'Shared.pak',
    'Public/Shared/Feats/FeatDescriptions.lsx',
  );
  const feats = await readXMLFile(file);
  return feats.save.region[0].node[0].children[0].node.map((child) => {
    const id = child.attribute.findNode('UUID').$.value;
    const name = child.attribute.translate('DisplayName') ?? '';
    const description = child.attribute.translate('Description') ?? '';
    return {
      id,
      name,
      description,
      icon: '',
      linkURL: getWikiURL(name),
      tags: ['Feat'],
      metadata: {},
    };
  });
}

module.exports = { getFeats };
