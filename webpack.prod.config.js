var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
let dir = 'build-prod';

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, dir),
    filename: 'js/index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!stylus-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin( 'css/styles.css', {allChunks: false }),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new HtmlWebpackPlugin({ template: 'src/template/index.html', inject: false })
  ]
};