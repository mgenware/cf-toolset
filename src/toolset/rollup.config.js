import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'main.tsx',
  output: {
    name: 'main',
    file: './dist/bundle.js',
    format: 'iife',
  },
	plugins: [
    typescript({ cacheRoot: (require('unique-temp-dir'))() }),
    uglify(),
	]
}
