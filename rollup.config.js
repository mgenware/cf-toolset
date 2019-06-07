import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
const fg = require('fast-glob');

const isProd = process.env.NODE_ENV == 'production';

const plugins = [
  resolve({
    browser: true,
  }),
  commonjs(),
  typescript({ cacheRoot: require('unique-temp-dir')() }),
];

if (isProd) {
  plugins.push(terser());
}

const entries = fg.sync(['src/toolset/*.ts']);
const tasks = [
  {
    input: entries,
    output: {
      dir: 'dist',
      format: 'system',
      sourcemap: true,
    },
    plugins,
  },
];

export default tasks;
