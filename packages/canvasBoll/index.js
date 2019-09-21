/*
 * @Author: HePeng
 * @Date: 2019-09-18 14:09:11
 * @Last Modified by: HePeng
 * @Last Modified time: 2019-09-18 14:26:26
 */

// 导入组件，组件必须声明 name
import canvasboll from './src/main.vue'
// 为组件添加 install 方法，用于按需引入
canvasboll.install = function (Vue) {
  Vue.component(canvasboll.name, canvasboll)
}

export default canvasboll