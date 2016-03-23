'use strict';

var webpack = require('webpack'),
    path = require('path');
    //jquery = require('jquery');

var config = {
    build : path.resolve(__dirname, '/dist')
};

module.exports = {
    devTool : 'inline-source-map',
    entry : {
        layouts : [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/components/layouts/initialize.jsx'
        ],
        vendors : ['jquery']
    },
    output : {
        path : config.build,
        filename : '[name].bundle.js',
        publicPath : '/assets/'
    },
    resolve : {
        extensions : ['.jsx', '.js', '']
    },
    plugins : [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity)
    ],
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    cacheDirectory : true,
                    presets : ['es2015', 'react']
                }
            },
            {
                test : /\.css$/,
                loader : 'style!css?modules&localIndentName=[name]---[local]---[hash:base64:5]'
            },
            {
                test : /\.html$/,
                loader : 'file?name=[name].[ext]'
            }
        ]
    }
};