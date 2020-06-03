/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: path.resolve(__dirname, 'src/next.js'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    // refer to: https://github.com/jaketrent/html-webpack-template
    // source code: https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      minify: {
        //删除注释
        removeComments: true,
        //删除空格
        collapseWhitespace: true,
      },
      filename: 'index.[hash:8].html',
      title: 'Welcome to bricechou.',
    }),
  ],
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'static/css'),
        // 从右向左解析原则
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: path.resolve(__dirname, 'static/image'),
        use: ['file-loader'],
      },
      // {
      //   test: /\.(svg|jpe?g|png|gif)$/i,
      //   include: path.resolve(__dirname, 'static/image'),
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10240,
      //         fallback: {
      //           loader: 'file-loader',
      //           options: {
      //             name: 'image/[name].[hash:8].[ext]',
      //           },
      //         },
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10240,
      //         fallback: {
      //           loader: 'file-loader',
      //           options: {
      //             name: 'media/[name].[hash:8].[ext]',
      //           },
      //         },
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'static/font'),
        use: ['file-loader'],
      },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10240,
      //         fallback: {
      //           loader: 'file-loader',
      //           options: {
      //             name: 'fonts/[name].[hash:8].[ext]',
      //           },
      //         },
      //       },
      //     },
      //   ],
      // },
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
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      // },
    ],
  },
}
