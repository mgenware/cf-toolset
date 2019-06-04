import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

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

const entries = [
  'case-converter',
  'character-line-counter',
  'color-picker-converter',
  'css-formatter',
  'decode-unicode-json',
  'html-data-encoder-decoder',
  'javascript-export-all-named-imports',
  'javascript-formatter',
  'json-formatter',
  'json-minifier',
  'markdown-formatter',
  'typescript-formatter',
  'url-data-encoder-decoder',
  'url-show-hide-unicode',
  'xml-data-encoder-decoder',
].map(s => `src/toolset/${s}.ts`);

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
