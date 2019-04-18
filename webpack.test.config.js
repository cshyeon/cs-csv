/* eslint-disable */
const path = require('path');
 
module.exports = (env, argv) => {
  const target = argv && argv.target;
  
  return {
    mode: env && env.mode ? env : 'development',
    target: target ? target : 'web',
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        '~': path.resolve(__dirname),
      }
    },
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
    }
  }
};