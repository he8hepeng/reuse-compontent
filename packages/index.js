/*
 * @Author: HePeng
 * @Date: 2019-09-18 14:09:07
 * @Last Modified by: HePeng
 * @Last Modified time: 2019-10-20 12:48:04
 */
// packages / index.js

// 导入单个组件
import canvasboll from './canvasBoll/index'
import Diffusion from './diffusion/index'
import canvasBGLZ from './canvasBG/index'
import DsjButtom from './dsj_button/index'

// 以数组的结构保存组件，便于遍历
const components = [
  canvasboll,
  Diffusion,
  canvasBGLZ,
  DsjButtom
]

// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}