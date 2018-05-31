/**
 * @Author: Dingjia
 * @Date:   2018-03-31T14:55:48+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-04T00:20:09+08:00
 */


const webpack = require("webpack")
const proxy = require("./proxy")
const historyApiFallback = require("./historyfallback")
module.exports = {
  devtool:"cheap-module-source-map",
  devServer:{
    inline:true,//在console开启打包状态
    port:8031,
    overlay:true,
    hot:true,
    hotOnly:true,
    proxy:proxy,
    historyApiFallback:historyApiFallback
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
