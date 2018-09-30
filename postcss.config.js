module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-functions': {
      functions: {
        rem: function (val) {
          return `${val / 16}rem`;
        }
      }},
    'postcss-extend': {},
    'postcss-cssnext': {},
    'lost': {}
  },
};
