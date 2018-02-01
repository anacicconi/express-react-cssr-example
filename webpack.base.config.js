const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AssetsPlugin      = require('assets-webpack-plugin');
const dev               = process.env.NODE_ENV === 'dev';

const srcFolder             = path.resolve(__dirname, 'src');
const srcServerFolder       = `${srcFolder}/server`;
const srcClientFolder       = `${srcFolder}/client`;
const srcClientImgFolder    = `${srcClientFolder}/img`;

let config = {
    context: srcFolder,
    // watch any modification and make sure the app is rebuild in dev
    watch: true,
    // be able to debug the source files in dev (and not the bundle.js)
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            // the babel-loader converts new js features into old ones (es6, react jsx...)
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // load fonts so they can be used in the css
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'public/font/',
                        publicPath: '/',
                        name: '[name].[hash].[ext]'
                    }
                },
            },
            // load the css
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: !dev
                        }
                    }
                })
            }
        ],
    },
    plugins: [
        // get a css file and not the style in the middle of the html
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        // copy the images to the dist folder
        new CopyWebpackPlugin([
            { from: srcClientImgFolder, to: 'img'},
        ]),
        // creates a json file with the path to css/js so we are able to use hashes on the output files
        new AssetsPlugin({
            path: srcServerFolder,
            fullPath: false
        }),
        // set global variables
        new webpack.DefinePlugin({
            APP: JSON.stringify(dev)
        })
    ],
    resolve: {
        alias: {
            server: path.resolve(__dirname, 'src/server/'),
            client: path.resolve(__dirname, 'src/client/'),
            shared: path.resolve(__dirname, 'src/shared/')
        }
    }
};

module.exports = {
    config
};
