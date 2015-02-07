module.exports = {
  entry: './src/entry.js',
  output: {
    path: 'bundle',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }
    ]
  }
}
