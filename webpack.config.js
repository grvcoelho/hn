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
    }
};
