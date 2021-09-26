/** 
@type {import('@types/webpack').Configuration}
*/

const path = require('path')

const config = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  // entry: './src/index.ts',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'app.js',
  //   publicPath: '/',
  //   clean: true,
  // },
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
  // devtool: 'inline-source-map',
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
