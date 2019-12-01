import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Dashboard from './modules/Dashboard.vue'
import LandingPage from './modules/LandingPage.vue'
import Login from './modules/Login.vue'
import Register from './modules/Register.vue'
import HelloWorld from './components/HelloWorld.vue'
import RouterDetails from './modules/RouterDetails.vue'
import GoogleMap from './modules/GoogleMap.vue' 

Vue.use(Router)

const auth = (to, from, next) => {
    if (store.getters.isLoggedIn) {
        next()
    }else{
        next('/login')
    }
}

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    ,
    {
        path: '/helloworld',
        name: 'helloworld',
        component: HelloWorld
      },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: auth
    },
    {
      path: '/googlemap',
      name: 'googlemap',
      component: GoogleMap,
      beforeEnter: auth
    },
    {
      path: '/routerdetails',
      name: 'routerdetails',
      component: RouterDetails,
      beforeEnter: auth
    }
  ]
})

export default router