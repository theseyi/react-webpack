module.exports = {
  entry: './entry.js',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader'
    }]
  }
}
