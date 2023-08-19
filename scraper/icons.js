const sharp = require('sharp');

const { getIconMetadata, getIconBuffer } = require('./iconFileParser');
const { logger } = require('./logger');

const URIS = {};

async function includeIcon(iconID) {
  if (!iconID || URIS[iconID]) {
    return iconID;
  }

  const { xStart, xEnd, yStart, yEnd, ddsPath } = getIconMetadata(iconID) ?? {};

  if (ddsPath == null) {
    logger.warn(`could not find metadata for icon "${iconID}"`);
    return iconID;
  }

  const { pngBuffer, imageWidth, imageHeight } = getIconBuffer(ddsPath) ?? {};
  if (pngBuffer == null) {
    logger.warn(`could not find texture for icon "${iconID}" (${ddsPath})`);
    return iconID;
  }

  const left = Math.floor(xStart * imageWidth);
  const top = Math.floor(yStart * imageHeight);
  const width = Math.floor((xEnd - xStart) * imageWidth);
  const height = Math.floor((yEnd - yStart) * imageHeight);
  const buffer = await sharp(pngBuffer)
    .extract({ left, top, width, height })
    .toBuffer();
  const iconURI = `data:image/png;base64,${buffer.toString('base64')}`;
  URIS[iconID] = iconURI;
  return iconID;
}

function getIncludedIcons() {
  return URIS;
}

module.exports = { includeIcon, getIncludedIcons };
