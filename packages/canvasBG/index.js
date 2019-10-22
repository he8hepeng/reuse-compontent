/*
 * @Author: HePeng
 * @Date: 2019-10-16 14:10:23
 * @Last Modified by: HePeng
 * @Last Modified time: 2019-10-17 18:58:36
 */


// 导入组件，组件必须声明 name
import DsjCanvasBg from './src/main.vue'
// 为组件添加 install 方法，用于按需引入
DsjCanvasBg.install = function (Vue) {
  Vue.component(DsjCanvasBg.name, DsjCanvasBg)
}

export default DsjCanvasBg