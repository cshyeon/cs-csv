/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const libraryName = 'bundle';
const outputFileName = `${libraryName}`;
 
const nodeConfig = require('./webpack.node.config');
const browserConfig = require('./webpack.web.config');

module.exports = [nodeConfig, browserConfig]