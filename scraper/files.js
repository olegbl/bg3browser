function getFilePath(pack, relativePath) {
  return `C:/Steam/steamapps/common/Baldurs Gate 3/Data/Extracted ${pack}/${relativePath}`;
}

module.exports = { getFilePath };
