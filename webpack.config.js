'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/assets',
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

    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ]
};