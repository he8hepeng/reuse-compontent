/*
 * @Author: HePeng 
 * @Date: 2019-09-18 14:05:13 
 * @Last Modified by: HePeng
 * @Last Modified time: 2019-10-14 17:10:30
 */
module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  css: {
    extract: false
  },
  devServer: {
    host: 'localhost',
    port: '8082'
  },
}