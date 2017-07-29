import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

Vue.config.productionTip = false;
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
