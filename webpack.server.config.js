const nodeExternals = require('webpack-node-externals');
const path          = require('path');
const merge         = require('webpack-merge');
const baseConfig    = require('./webpack.base.config').config;

const srcFolder             = path.resolve(__dirname, 'src');
const distFolder            = path.resolve(__dirname, 'dist');

const config = merge({
    target: 'node',
    entry: {
        server: `${srcFolder}/server/index.js`,
    },
    output: {
        path: distFolder,
        filename: '[name].js'
    },
    externals: nodeExternals(),
}, baseConfig);

module.exports = config;
