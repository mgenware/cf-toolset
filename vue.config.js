const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  return undefined;
}

module.exports = {
  pages: {
    main: 'src/core_entry.ts',
    ls_cs: 'src/ls/cs.js',
    ls_en: 'src/ls/en.js',
  },
};
