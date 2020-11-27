import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/components/views'
import Home from '@/components/pages/home'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/cart',
          component: () => import('@/components/pages/cart')
        },
        {
          path: '/mine',
          component: () => import('@/components/pages/mine')
        },
        {
          path: '/order',
          component: () => import('@/components/pages/order')
        },
        {
          path: '/list',
          component: () => import('@/components/pages/list')
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/components/views/login')
    },
    {
      path: '/register',
      component: () => import('@/components/views/register')
    },
    {
      path: '/sort',
      component: () => import('@/components/views/sort')
    },
    {
      path: '/info',
      component: () => import('@/components/views/info')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
