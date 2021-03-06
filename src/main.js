// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Foundation from 'foundation-sites'

Vue.config.productionTip = false

Vue.prototype.$foundation = Foundation
/* now is defined in build/webpack.base.conf.js */
Vue.prototype.$buildDate = now

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
