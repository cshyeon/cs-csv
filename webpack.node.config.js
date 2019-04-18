/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const libraryName = 'Csv';
const outputFileName = `${libraryName}`;

const nodeConfig = (env, argv) => {
  const isProduction = argv && argv.mode && argv.mode === 'production';
  
  return {
    mode: isProduction ? 'production' : 'development',
    target: 'node',
    node: {
      __dirname: false,
    },
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: outputFileName + '.js',
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json'
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname),
      }
    },
    devtool: 'inline-source-map',
    externals: [nodeExternals()],
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
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};

module.exports = nodeConfig;
