const path = require('path');
 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader",
            options: { minimize: true }
          }, {
            loader: "sass-loader"
          }]
        })
      }
    ]
  },
   plugins: [
     new UglifyJSPlugin(), new ExtractTextPlugin("main.min.css")
   ]
 });



 