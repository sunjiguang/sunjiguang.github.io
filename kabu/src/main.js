import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "@/style/index.scss";
import "@/utils/quanju"
import '@/utils/Vant'
import "lib-flexible";
import {axios} from "@/utils/axios"
Vue.prototype.$axios = axios;   // this.$axios = axios 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
