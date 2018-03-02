import * as mfs from 'm-fs';
import * as nodepath from 'path';
import * as util from 'util';
import { exec } from 'child_process';
const execAsync = util.promisify(exec);

/* tslint:disable no-console */
/* tslint:disable max-line-length */
(async () => {
  const toolsetPath = nodepath.resolve('../src/toolset');
  const entries = (await mfs.listSubDirs(toolsetPath))
    .filter((dir) => !dir.startsWith('_'))
    .map((dir) => nodepath.join(toolsetPath, dir, 'main.tsx'));

  console.log('Building toolset...');
  console.log(entries);

  const configPath = nodepath.resolve('../src/toolset/rollup.config.js');

  const promises = entries.map(async (entry) => {
    console.log(`rollup -i "${entry}" -c "${configPath}"`);
    return await execAsync(`rollup -i "${entry}" -c "${configPath}"`);
  });
  await Promise.all(promises);
})();