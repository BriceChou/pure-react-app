const express = require('express'),
  package = require('./package'),
  path = require('path'),
  config = require('./webpack.config')

// const webpackDevMiddleware = require('webpack-dev-middleware'), webpack = require('webpack'),

const app = express()
// const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   }),
// )

app.use(express.static(config.output.path))

app.get('/', (req, res) => {})

// Serve the files on port 9988.
app.listen(package.config.port, () => {
  console.log('Example app listening on port %d!\n', package.config.port)
})
