/** @format */

const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'production',
  // if you want to debug your code on production enviornment, add 'source-map' into output file.
  // devtool: 'source-map',
  output: {
    filename: '[name].[hash:8].js',
  },
})
