import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home', //默认子路由 
        name: 'home',
        component: () => import('@/views/home')
      }, {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }, {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      }, {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
