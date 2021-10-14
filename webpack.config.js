/** 
@type {import('@types/webpack').Configuration}
*/

const path = require('path')

/*
    With this setup, you need to register your TS files by giving them a name and a path.
    The output will be the same structure as the entry.

    It's a nice pattern if you have only a few pages with a lot of logic. You link the JS file for the page that need JS.

    e.g:
     index: './src/pages/index.ts' -> dist/index.js
     about: './src/pages/about.ts' -> dist/about.js

    But, if you want to load the same JS for each pages, you can convert the entry and the output by:
    
      entry: './src/index.ts',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/',
        clean: true,
      },
  */

const config = {
  entry: {
    index: './src/pages/index.ts',
    about: './src/pages/about.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },

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
