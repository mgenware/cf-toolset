const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  module.exports = {};
  return;
}

module.exports = {
  baseUrl: '/static/toolset/',
  pages: {
    main: 'src/core_entry.ts',
    ls_cs: 'src/ls/inject_cs.js',
    ls_en: 'src/ls/inject_en.js',
  },
};
