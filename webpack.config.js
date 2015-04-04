var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/entry.js',
    vendor: ['react']
  },
  output: {
    path: 'bundle',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js(?:x)?$/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};