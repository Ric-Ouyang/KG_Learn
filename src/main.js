import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 引入elementui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//组件形式使用请求,通过this.xxx全局使用
import { postRequest } from './utils/api.js'
import { getRequest } from './utils/api.js'
import { putRequest } from './utils/api.js'
import { deleteRequest } from './utils/api.js'
import NeoVis from '../public/static/neovis' // 使用require的方式引入


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
