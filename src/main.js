import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
global.$ = jQuery
// eslint-disable-next-line
import Bootstrap from 'bootstrap'

Vue.config.productionTip = false

export const bus = new Vue()

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
