var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: __dirname + "/dist", filename: 'build.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
};
