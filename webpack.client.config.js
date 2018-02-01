const path                  = require('path');
const merge                 = require('webpack-merge');
const baseConfig            = require('./webpack.base.config').config;

const srcFolder             = path.resolve(__dirname, 'src');
const distFolder            = path.resolve(__dirname, 'dist');

const config = merge({
    target: 'web',
    entry: {
        client: `${srcFolder}/client/index.js`,
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: `${distFolder}/client`,
        filename: '[name].[hash].js'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}, baseConfig);

module.exports = config;
