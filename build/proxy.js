/**
 * @Author: Dingjia
 * @Date:   2018-04-04T00:06:28+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-04T00:38:46+08:00
 */




 module.exports = {
     "/.+":{
       target:"https://m.weibo.cn",
       changeOrigin:true,
       logLevel:"debug",
       pathRewrite:{
         "^/comments":"/api/comments"
       },
       headers:{
         "Cookie":""
       }
     }

 }
