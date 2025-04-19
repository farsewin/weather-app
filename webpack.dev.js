const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
    open: true,
    hot: true,
    historyApiFallback: true,
    port: 8081,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
