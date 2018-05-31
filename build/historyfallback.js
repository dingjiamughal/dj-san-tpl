/**
 * @Author: Dingjia
 * @Date:   2018-04-04T00:06:40+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-04T00:40:56+08:00
 */



module.exports = {
  htmlAcceptHeaders:["text/html","application/xhtml+xml"],//通过匹配html的情况才能生效rewrites
  rewrites:{
    from:/^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
    to:function(ctx){
      return "/" + ctx.match[1] + ctx.match[2] + ".html"
    }
  }
}
