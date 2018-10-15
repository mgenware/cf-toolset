const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  module.exports = {};
  return;
}

module.exports = {
  baseUrl: isProd ? '/static/toolset/' : '/',
  pages: {
    main: 'src/prod_entry.ts',
    ls_cs: 'src/ls/inject_cs.js',
    ls_en: 'src/ls/inject_en.js',
  },
  productionSourceMap: false,
};
