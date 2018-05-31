/**
 * @Author: Dingjia
 * @Date:   2018-04-01T20:23:36+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-01T21:39:20+08:00
 */



module.exports = {
  root:true,
  extends:"standard",
  plugins:[],
  env:{//所支持的环境
    browser:true,
    node:true,
  },
  rules:{//添加规则
    indent:["error",4],
    "eol-last":["error","never"]
  }
}
