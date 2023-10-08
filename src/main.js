import Vue from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/reset.css'
import './assets/iconfont/iconfont.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
