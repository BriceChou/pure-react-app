const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const compiler = webpack(config)
const config = require('./webpack.dev.js')

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
)

app.get('/', () => {})

// Serve the files on port 9988.
app.listen(9988, function () {
  console.log('Example app listening on port 9988!\n')
})
