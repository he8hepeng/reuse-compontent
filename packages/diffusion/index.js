// packages/textarea/index.js

// 导入组件，组件必须声明 name
import Diffusion from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
Diffusion.install = function (Vue) {
  Vue.component(Diffusion.name, Diffusion)
}

export default Diffusion