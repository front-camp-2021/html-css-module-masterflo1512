const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    liveReload: false,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Online Store',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new CopyPlugin({
      patterns: [
        './images/**'
      ],
    }),
  ]
};
