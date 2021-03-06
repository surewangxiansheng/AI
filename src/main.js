import Vue from 'vue'
import App from './App.vue'
// import text1 from './text1.vue'
// import text2 from './text2.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import './plugins/element.js'
import './assets/css/style.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(app)
