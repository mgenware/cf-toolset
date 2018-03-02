import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'main.tsx',
  output: {
    name: 'main',
    file: './dist/bundle.js',
    format: 'iife',
    globals: ['React'],
  },
  external: ['react', 'bootstrap'],
	plugins: [
    typescript({
      cacheRoot: (require('unique-temp-dir'))(),
      tsconfigOverride: {
        compilerOptions: { 
          declaration: false,
          jsx: 'react',
        },
      },
    }),
    uglify(),
    postcss(),
	]
}
