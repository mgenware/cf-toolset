import routes from './src/routes.json';
import _fs from 'fs';
import mkdirp from 'mkdirp';
import lsEN from './src/ls/en';
import lsCS from './src/ls/cs';
import htmlEntities from 'html-entities';

const fs = _fs.promises;
const AllHtmlEntities = htmlEntities.AllHtmlEntities;
const entities = new AllHtmlEntities();

function renderItem(name, urlName) {
  const link = `/toolset/${urlName}`;
  return `<a href="${link}">${entities.encode(name)}</a><br/>`;
}

(async () => {
  console.log('> Generating list...');

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
