import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import axios from 'axios'

import Vuelidate from "vuelidate"
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
Vue.use(Vuelidate)

// Vue.use(axios)

Vue.config.productionTip = false

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)

// new Vue({
//   render: h => h(App),
//   router: router,
//   template: '<router-view></router-view>'
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   // router,
//   components: { App },
//   template: '<App/>'
// })

export const EventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')