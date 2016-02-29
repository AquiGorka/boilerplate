// webpack.config.js
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [ path.resolve(__dirname, "src") ],
        query: { presets:['es2015'] }
      }
    ]
  }
};