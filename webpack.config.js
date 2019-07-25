const path = require('path');

module.exports = {
  entry: {
      'bundle': './src/script/randomizer.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ]
  },
  optimization: {
    minimize: false
  }
};