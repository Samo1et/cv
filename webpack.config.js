'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: __dirname + '/assetsBundle',
    entry:  {
        main: './main',
        styles: './styles'
    },
    output:  {
        path:     __dirname + '/www',
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.styl']
    },

    module: {

        loaders: [{
            test:   /\.js$/,
            loader: "babel?presets[]=es2015"
        }, {
            test:   /\.jade$/,
            loader: "jade"
        }, {
            test:   /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }]

    },

    devServer: {

        // Control flow:
        //   middlware ->
        //     proxy ->
        //       historyApiFallback ? -> historyApiFallback, middleware
        //         -> contentBase

        // proxy:
        //   array [ { path: '*', target: '"http://localhost:3000" } ]
        //  or
        //   object { '*': { target: "http://localhost:3000" } }
        //  or
        //   object { '*': "http://localhost:3000" }
        proxy: [{
            path:      "dynamic/* or /regexp/",
            target:    "http://localhost:3000",
            host:      "proxy.host", // if another HOST header needed for proxy,
            bypass:    function(req, res, options) {
                // return URL to rewrite req.url and SKIP PROXY
                // return false otherwise
            },
            rewrite:   function(req, options) {
                // do something with req if needed
            },
            configure: function(proxy) {
                // do something with http-proxy server instance if needed (add handlers etc)
            }
        }],

        contentBase: __dirname + '/backend', // static files, cwd() by default
        historyApiFallback: true
    },

    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ]
};