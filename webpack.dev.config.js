import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const PORT = 8080
const dir = 'build-dev/'

module.exports = {
  contentBase: dir,
  devtool: 'eval',
  port: PORT,
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, dir),
    filename: 'js/index.js',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!stylus-loader')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/styles.css', { allChunks: false }),
    new HtmlWebpackPlugin({ template: './src/template/index.html', inject: false })
  ]
}

