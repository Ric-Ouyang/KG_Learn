/* 跨域代理 */

let proxyObj={}
/* 所有/的都要代理 */
proxyObj['/'] = {
  //websocket
  ws: false,
  //代理到哪里去,目标地址
  target: 'http://yapi.smart-xwork.cn/mock/145077',
  //发送请求头host会被设置target
  changeOrigin: false,
  //因为没有前缀地址，所以不重写请求地址。如果写了就用后面的path替代了前面path的内容
  pathReWrite: {
    '^/':'/'
  }
}


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
  },
  {
    devServer:{
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
    }
  }
)
