var rucksack = require('rucksack-css');
var cssnext = require('cssnext');
var path = require('path');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: {
        jsx: './index.js',
        html: './index.html',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'react-load',
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
    postcss: function() {
        return [
            cssnext,
            rucksack({
                autoprefixer: true
            })
        ];
    }
};
