const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['jquery'] // 公共库
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // [name].min.[hash:5].js
    library: 'pass',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究')
    //new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'eval-source-map' // 参考readme.md
}
