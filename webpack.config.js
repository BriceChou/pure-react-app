/** @format */

const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: './src/next.js',
  },
  plugins: [],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'static/css'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'static/image'),
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'static/font'),
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};