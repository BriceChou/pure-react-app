/** @format */

const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
  },
  // devServer: {
  //   historyApiFallback: true,
  //   quiet: false,
  //   noInfo: false,
  //   publicPath: '/',
  //   stats: {
  //     assets: true,
  //     version: false,
  //     hash: false,
  //     timings: false,
  //     chunks: false,
  //     chunkModules: true,
  //   },
  // },
})
