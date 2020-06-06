// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './config/router.js'


Vue.config.productionTip = false

Vue.prototype.$axios=axios;
Vue.prototype.$rootPath = "http://127.0.0.1:8088"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
