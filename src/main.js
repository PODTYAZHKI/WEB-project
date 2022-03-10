import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/click-outside.js'
import './plugins/screen.js'
// import './plugins/api'
import '@mdi/font/css/materialdesignicons.min.css'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios';
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

axios.defaults.withCredentials = true
Vue.prototype.$axios =  axios.create({});
// const token = localStorage.getItem('token')
// if (token) {
  // Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
