const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map', // 参考readme.md
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'pass',
    libraryTarget: 'umd'
  },
  plugins: [new webpack.BannerPlugin('版权所有，翻版必究')]
}
