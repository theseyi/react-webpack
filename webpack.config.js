module.exports = {
  entry: './entry.js',
  output: {
    path: build,
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader'
    }]
  }
}
