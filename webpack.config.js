var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var values = require('postcss-modules-values');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/button.css'],
    output: {
      path: path.join(__dirname, 'lib'),
      filename: "bundle.css"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader') }
        ]
    },
    postcss: function () {
      return [autoprefixer, values];
    },
    plugins: [
        new ExtractTextPlugin("fancyButton.css")
    ]
}