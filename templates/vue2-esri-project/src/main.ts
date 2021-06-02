import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import './styles/index.scss'

Vue.use(VueCompositionAPI)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
