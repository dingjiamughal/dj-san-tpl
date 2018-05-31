/**
 * @Author: Dingjia
 * @Date:   2018-03-31T14:55:48+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-01T21:34:41+08:00
 */

const webpack = require("webpack")
const HtmlInlineChunkPlugin = require("html-webpack-inline-chunk-plugin")
const PurifyCss = require("purifycss-webpack")
const path = require("path")
const glob = require("glob-all")
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
  plugins:[
    new PurifyCss({
      paths:glob.sync(["./*.html","./src/*.js"])
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // name:"['vendor','manifest']",
      name:"manifest",
      minChunks:2
    }),
    new HtmlInlineChunkPlugin({
      inlineChunks:["manifest"]
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(["dist"])
  ]
}
