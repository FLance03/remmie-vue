
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
Vue.config.productionTip = false
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleCharts from 'vue-google-charts'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

sync(store, router)

Vue.use(VueGoogleCharts)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')