const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js', // [name].min.[hash:5].js
    library: 'pass',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['> 1%', 'last 2 versions']
                  }
                }
              ]
            ],
            plugins: []
          }
        },
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],

  devtool: 'eval-source-map' // 参考readme.md
}
