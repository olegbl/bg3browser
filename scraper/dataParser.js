const fs = require('fs');
const vm = require('vm');

async function readCurrentData() {
  const tsCode = fs.readFileSync('./src/data.tsx', {
    encoding: 'utf8',
  });
  const jsCode = tsCode
    .replace(/\n/gm, '')
    .replace(/^.*const data: Entity\[\] = /, 'var data = ')
    .replace(/export default data;/, 'module.exports = data;')
    .trim();
  const context = { module: { exports: {} } };
  vm.runInNewContext(jsCode, context);
  return context.module.exports.reduce(
    (agg, entity) => ({ ...agg, [entity.name]: entity }),
    {},
  );
}

module.exports = { readCurrentData };
