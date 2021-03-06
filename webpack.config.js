/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    publicPath: '/',
    filename: 'bundle-[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'chunk[id]-[chunkHash:8].js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: false,
    }),
    // refer to: https://github.com/jaketrent/html-webpack-template
    // source code: https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      cache: true,
      // inject: 'head',
      // scriptLoading: 'defer',
      template: 'index.ejs',
      favicon: path.resolve(__dirname, 'static/img/favicon.ico'),
      meta: {
        xUACompatible: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        viewport: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover',
        keywords: 'react, webpack, redux, typescript, bricechou',
        description: 'just a pure react app created by bricechou.',
      },
      // more refer to : https://github.com/jantimon/html-webpack-plugin/tree/master/examples/template-parameters
      // templateParameters: (compilation, assets, assetTags, options) => {
      //   // XXX: add defer attribute into third-part script library
      //   assetTags.bodyTags.forEach(tag => {
      //     const { tagName, attributes } = tag
      //     if ('script' === tagName && attributes && attributes.src.indexOf('vendor') > -1) {
      //       tag.attributes.defer = true
      //     }
      //     return tag
      //   })
      //   return {
      //     compilation,
      //     webpackConfig: compilation.options,
      //     htmlWebpackPlugin: {
      //       tags: assetTags,
      //       files: assets,
      //       options,
      //     },
      //   }
      // },
      minify: {
        //删除注释
        removeComments: true,
        //删除空格
        collapseWhitespace: true,
      },
      filename: 'index.html',
      title: 'Welcome to bricechou.',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      // name: 'vendor',
    },
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'webpack')],
  },
  resolve: {
    // 配置引用缩写
    alias: {
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@css': path.resolve(__dirname, 'static/css'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@image': path.resolve(__dirname, 'static/img'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@component': path.resolve(__dirname, 'src/components'),
    },
    symlinks: false,
    // 够使用户在引入模块时不带扩展名
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'static/css'),
        // 从右向左解析原则
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: path.resolve(__dirname, 'static/img'),
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
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
    ],
  },
}
