'use strict';

var webpack = require('webpack'),
    path = require('path');

var configuration = {
    entry : [
        'webpack-dev-server/client?http://192.168.0.10:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output : {
        path : path.resolve(__dirname, './build'),
        filename : 'rawui.bundle.js',
        publicPath : './assets/js/'
    },

    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compressor : {
                screw_ie8 : true,
                warning : false
            },

            output : {
                comments : false
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = {
    devTool : '#source-map',
    entry : configuration.entry,
    output : configuration.output,
    plugins : configuration.plugins,
    module : {
        loaders : [
            {
                test : /\.js?$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    cacheDirectory : true,
                    preset : ['es2015']
                }
            },
            {
                test : /\.css$/,
                loader : 'css-loader'
            }
        ]
    }
};