const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const __DEV__ = 'development' === process.env.NODE_ENV;

const config = {
    src: path.join(__dirname, 'assetsSource'),
    dist: path.join(__dirname, 'www/build')
};

const webpackConfig = {
    context: config.src,
    entry: {
        resume: [
            './resume',
        ],
    },
    output: {
        path: config.dist,
        publicPath: '/',
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.styl$/,
                include: config.src,
                loader: ExtractTextPlugin.extract('style', function () {
                    return __DEV__ ? 'css?sourceMap!postcss?sourceMap!stylus?sourceMap' : 'css?minimize!postcss!stylus';
                }())
            }
        ]
    },
    resolve: {
        root: config.src,
        extensions: ['', '.js', '.jsx']
    },

    // dev
    watch: __DEV__,
    devtool: __DEV__ ? 'inline-source-map' : null,
    watchOptions: {
        aggregateTimeout: 100
    },

    // plugins
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin('[name].min.css', {
            allChunks: true
        }),
        new CommonsChunkPlugin({
            name: 'common',
            filename: '[name].min.js',
            minChunks: 2
        }),
    ],
    postcss: [
        autoprefixer(),
    ],
};

module.exports = webpackConfig;