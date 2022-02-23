const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@config': 'src/config',
    '@pages': 'src/pages',
    '@store': 'src/store',
    '@services': 'src/services',
  })(config);

  return config;
};
