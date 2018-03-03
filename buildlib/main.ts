import * as mfs from 'm-fs';
import * as nodepath from 'path';
import * as util from 'util';
import { exec } from 'child_process';
import { unlink } from 'fs';
const execAsync = util.promisify(exec);
const unlinkAsync = util.promisify(unlink);

/* tslint:disable no-console */
/* tslint:disable max-line-length */
(async () => {
  const toolsetPath = nodepath.resolve('../src/toolset');
  const entryNames = (await mfs.listSubDirs(toolsetPath))
    .filter((dir) => !dir.startsWith('_'));

  console.log('Building toolset...');
  console.log(entryNames);

  console.log('Reading scripts...');
  const rawEntryScript = await mfs.readTextFileAsync('./inject/entry.tsx.txt');

  const promises = entryNames.map(async (name) => {
    // create entry file
    const entryFile = `${toolsetPath}/${name}/entry.tsx`;
    const entryContent = rawEntryScript.replace('__APP_ID__', `cft_${name}_app`);
    await mfs.writeFileAsync(entryFile, entryContent);

    const distFile = nodepath.join(__dirname, `dist/${name}.prod.js`);
    const cmd = `cd "${toolsetPath}" && rollup -c rollup.config.js -i "${name}/entry.tsx" -o "${distFile}"`;
    console.log(cmd);
    await execAsync(cmd);
    await unlinkAsync(entryFile);
  });
  await Promise.all(promises);
})();
