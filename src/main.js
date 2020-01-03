import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import './plugins/element.js'
import './assets/css/style.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:9090'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
