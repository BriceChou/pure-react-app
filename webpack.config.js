/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: './src/next.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: true, dry: false }),
    // refer to: https://github.com/jaketrent/html-webpack-template
    // source code: https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      minify: {
        //删除注释
        removeComments: true,
        //删除空格
        collapseWhitespace: true,
      },
      filename: 'index.[hash].html',
      title: 'Welcome to bricechou.',
    }),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'static/css'),
        // 从右往左开始解析
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
}
