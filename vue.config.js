var webpack = require('webpack');

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery',
      'window.jQuery': 'jquery'
    }));
    config.module.rules.push({
      test: /plugins.js$/,
      use: 'imports-loader?this=>window'
    });
  }
};
