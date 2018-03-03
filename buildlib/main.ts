import * as mfs from 'm-fs';
import * as nodepath from 'path';
import * as util from 'util';
import { exec } from 'child_process';
const execAsync = util.promisify(exec);

/* tslint:disable no-console */
/* tslint:disable max-line-length */
(async () => {
  const toolsetPath = nodepath.resolve('../src/toolset');
  const entryNames = (await mfs.listSubDirs(toolsetPath))
    .filter((dir) => !dir.startsWith('_'));

  console.log('Building toolset...');
  console.log(entryNames);

  const promises = entryNames.map(async (name) => {
    const distFile = nodepath.join(__dirname, `dist/${name}.prod.js`);
    const cmd = `cd "${toolsetPath}" && rollup -c rollup.config.js -i "${name}/main.tsx" -o "${distFile}"`;
    console.log(cmd);
    return await execAsync(cmd);
  });
  await Promise.all(promises);
})();
