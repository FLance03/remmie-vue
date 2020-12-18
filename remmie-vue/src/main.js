
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
Vue.config.productionTip = false
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
