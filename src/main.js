import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入icon
import './assets/css/font-awesome.min.css'
// 导入全局CSS
import './assets/css/global.css'
// 导入axios
import axios from 'axios'
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
