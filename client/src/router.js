import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/components/Dashboard.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/components/FormLogin.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/components/FormRegister.vue')
        },
        {
          path: 'favorites',
          name: 'myfavorites',
          component: () => import('@/components/MyFavorites.vue')
        },
        {
          path: ':id',
          name: 'details',
          component: () => import('@/components/Details.vue')
        }
      ]
    }
  ]
})
