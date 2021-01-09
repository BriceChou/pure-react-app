/** @format */

const merge = require('webpack-merge'),
  common = require('./webpack.config'),
  path = require('path'),
  pkg = require('./package')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    // pathinfo: true,
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    // hot: true,
    // https: true,
    // host: '0.0.0.0',
    open: 'Google Chrome',
    // openPage: ['bricechou', ''],
    port: pkg.config.port || 9988,
    contentBase: path.join(__dirname, 'dist'),
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000'
    // },
    // historyApiFallback: true,
    // quiet: false,
    // noInfo: false,
    // publicPath: '/',
    // stats: {
    //   assets: true,
    //   version: false,
    //   hash: false,
    //   timings: false,
    //   chunks: false,
    //   chunkModules: true,
    // },
  },
})
