import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  data: {
    list: '',
    items: '',
  },
  // data: {
  //   userName: '',
  //   password: ''
  // },
  render: h => h(App)
}).$mount('#app')
