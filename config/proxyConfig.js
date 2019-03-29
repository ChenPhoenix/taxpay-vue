

//跨域代理
module.exports = {
  //ninebot商城接口
  proxyList: {
    '/api': {
      target: 'http://www.ninebot.cn/', // 接口的域名
      // secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      pathRewrite: {
        '^/api': '/'
      }
    },
      '/bpi': {
          target: 'https://suggest.taobao.com/', // 接口的域名
          // secure: false,  // 如果是https接口，需要配置这个参数
          changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
          pathRewrite: {
              '^/bpi': '/'
          }
      }
  },
}
