/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libraryName = 'Csv';
const outputFileName = `${libraryName}`;

const browserConfig = (env, argv) => {
  const isProduction = argv && argv.mode && argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    target: 'web',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: outputFileName + '.browser.js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this',
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json'
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname),
      }
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env'              
              ],                                               
            ],
            plugins: [
              [
                require('@babel/plugin-transform-runtime')
              ]
            ]
          },
        }
      ]
    },
    plugins: isProduction ? [] : [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ]
  }
};
 
module.exports = browserConfig;
