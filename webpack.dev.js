/** @format */

const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9988,
    contentBase: './dist',
  },
  output: {
    filename: '[name].[hash:8].js',
  },
})
