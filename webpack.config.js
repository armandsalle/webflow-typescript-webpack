const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    compress: true,
    port: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
    host: 'localhost',
    hot: true,
  },
  externals: {
    jquery: 'jQuery',
  },
}

module.exports = config
