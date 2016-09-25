var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config');

var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath : webpackConfig.output.publicPath,
    hot : true,
    historyApiFallback : false

});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        new Error(err);
    }
    console.log('Listening at localhost:3000');
});