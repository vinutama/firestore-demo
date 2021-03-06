import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'


Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  baseURL: `https://developers.zomato.com/api/v2.1`
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
