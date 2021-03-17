const path = require('path');
const webpack = require('webpack');

module.exports = {
  // webpack config
  webpack(config, _options) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

      // Path aliases
      config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
      config.resolve.alias['@components'] = path.join(__dirname, 'components');
      config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
      config.resolve.alias['@interfaces'] = path.join(__dirname, 'interfaces');

    return config;
  },
  images: {
    domains: ['raw.githubusercontent.com', 'res.cloudinary.com'],
  },
};