import Vue from 'vue'
import App from './App.vue'
import DsjCanvasBoll from '../packages/index'
import TagTextarea from '../packages/index'

Vue.config.productionTip = false
Vue.use(TagTextarea)
Vue.use(DsjCanvasBoll)
new Vue({
  render: h => h(App),
}).$mount('#app')
