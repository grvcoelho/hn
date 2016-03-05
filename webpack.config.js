var webpack = require('webpack');
var rucksack = require('rucksack-css');
var cssnext = require('cssnext');
var path = require('path');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: {
        jsx: './index.js',
        html: './index.html'
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loaders: [
                    'file?name=[name].[ext]'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    postcss: function() {
        return [
            cssnext,
            rucksack({
                autoprefixer: true
            })
        ];
    }
};
