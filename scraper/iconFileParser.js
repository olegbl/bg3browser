const fs = require('fs');
const toArrayBuffer = require('buffer-to-arraybuffer');
const ddsParser = require('dds-parser');
const pngjs = require('pngjs');

const { logger } = require('./logger');
const { getFilePath } = require('./files');
const { readXMLFile } = require('./xmlFileParser');

const ICON_FILES = [
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_2.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_2.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_3.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_3.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_4.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_4.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_5.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_5.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Items_6.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Items_6.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/SharedDev/GUI/Icons_Items_Dev.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/SharedDev/Assets/Textures/Icons/Icons_Items_Dev.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/New_EquipmentIcons.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/New_EquipmentIcons.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/Shared/GUI/Icons_Skills.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/Shared/Assets/Textures/Icons/Icons_Skills.dds',
    ),
  ],
  [
    getFilePath('Shared.pak', 'Public/SharedDev/GUI/Icons_Skills.lsx'),
    getFilePath(
      'Icons.pak',
      'Public/SharedDev/Assets/Textures/Icons/Icons_Skills.dds',
    ),
  ],
];

async function readDDSFile(file) {
  if (!(await fs.existsSync(file))) {
    return null;
  }
  logger.debug(`reading dds file ${file}`);
  const data = await fs.readFileSync(file);
  const buffer = toArrayBuffer(data);
  const metadata = ddsParser.parseHeaders(buffer);
  const image = metadata.images[0];
  const { width: imageWidth, height: imageHeight } = image.shape;
  const rgba = ddsParser.decodeDds(
    new Uint8Array(buffer.slice(image.offset, image.offset + image.length)),
    metadata.format,
    imageWidth,
    imageHeight,
  );
  const png = new pngjs.PNG({
    width: imageWidth,
    height: imageHeight,
  });
  for (let y = 0; y < imageHeight; y++) {
    for (let x = 0; x < imageWidth; x++) {
      const idx = (y * imageWidth + x) * 4;
      png.data[idx] = rgba[idx];
      png.data[idx + 1] = rgba[idx + 1];
      png.data[idx + 2] = rgba[idx + 2];
      png.data[idx + 3] = rgba[idx + 3];
    }
  }
  return { pngBuffer: pngjs.PNG.sync.write(png), imageWidth, imageHeight };
}

const BUFFERS = {};
const ICONS = {};

async function readIconFiles() {
  for (const [lsxPath, ddsPath] of ICON_FILES) {
    // read dds file
    BUFFERS[ddsPath] = await readDDSFile(ddsPath);

    // read xml file
    const xml = await readXMLFile(lsxPath);
    if (xml != null) {
      xml.save.region.forEach((region) =>
        region.node[0].children[0].node.forEach((node) => {
          const iconID = node.attribute.findNode('MapKey')?.$?.value;
          if (iconID == null) {
            return;
          }
          const xStart = parseFloat(node.attribute.findNode('U1').$.value);
          const xEnd = parseFloat(node.attribute.findNode('U2').$.value);
          const yStart = parseFloat(node.attribute.findNode('V1').$.value);
          const yEnd = parseFloat(node.attribute.findNode('V2').$.value);
          ICONS[iconID] = { xStart, xEnd, yStart, yEnd, ddsPath };
        }),
      );
    }
  }
}

function getIconMetadata(iconID) {
  return ICONS[iconID] ?? ICONS['Generated_' + iconID];
}

function getIconBuffer(ddsPath) {
  return BUFFERS[ddsPath];
}

module.exports = { readDDSFile, readIconFiles, getIconMetadata, getIconBuffer };
