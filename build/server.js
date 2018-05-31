/**
 * @Author: Dingjia
 * @Date:   2018-04-03T22:59:24+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-04T00:38:02+08:00
 */

const express = require("express")
const webpack = require("webpack")
const opn = require("opn") //打开浏览器

const app = express()
const port = 3000

// connect webpack and express
const webpackDevMiddleWare = require("webpack-dev-middleware")
const webpackHotMiddleWare = require("webpack-hot-middleware")
const webpackProxyMiddleWare = require("http-proxy-middleware")
const historyApiFallback = require("connect-history-api-fallback")

const config = require("./webpack.common.conf")("development")
const compiler = webpack(config)

const proxyTable = require("./proxy")
const historyfallback = require("./historyfallback")

for (let ctx in proxyTable) {
  app.use(webpackProxyMiddleWare(ctx, proxyTable[ctx]))
}
app.use(historyApiFallback(historyfallback))

app.use(webpackDevMiddleWare(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleWare(compiler))

app.listen(port, () => {
  console.log("success listen to" + port)
  opn("http://localhost:" + port)
})
