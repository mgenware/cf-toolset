const routes = require('./src/routes.json');
const fs = require('fs').promises;
const lsEN = require('./src/ls/en');
const lsCS = require('./src/ls/cs');
const mkdirp = require('mkdirp');
const { AllHtmlEntities } = require('html-entities');
const entities = new AllHtmlEntities();

function renderItem(name, urlName) {
  const link = `/toolset/${urlName}`;
  return `<a href="${link}">${entities.encode(name)}</a><br/>`;
}

(async () => {
  console.log('> Generating list...')

  let htmlEN = '';
  let htmlCS = '';
  for (const [name, urlName] of routes.routes) {
    const textEN = lsEN[name];
    const textCS = lsCS[name];

    htmlEN += renderItem(textEN, urlName);
    htmlCS += renderItem(textCS, urlName);
  }

  const outDir = './dist/templates';
  await mkdirp(outDir);
  await fs.writeFile(`${outDir}/cft.en.html`, htmlEN);
  await fs.writeFile(`${outDir}/cft.cs.html`, htmlCS);
})();
