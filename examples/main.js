import Vue from 'vue'
import App from './App.vue'
import DsjCanvasBoll from '../packages/index'
import Diffusion from '../packages/index'
import DsjCanvasBg from '../packages/index'

Vue.config.productionTip = false
Vue.use(Diffusion)
Vue.use(DsjCanvasBoll)
Vue.use(DsjCanvasBg)
new Vue({
  render: h => h(App),
}).$mount('#app')
