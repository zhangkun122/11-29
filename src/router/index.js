import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/sendHome',
    children:[
      {
        path:'sendHome',
        name:'sendHome',
        component:()=>import('../views/home/SendHome.vue')
      },
      {
        path:'classify',
        name:'classify',
        component:()=>import('../views/home/Classify.vue')
      },
      {
        path:'vip',
        name:'vip',
        component:()=>import('../views/home/Vip.vue')
      },
      {
        path:'shoopcar',
        name:'shoopcar',
        component:()=>import('../views/home/ShoopCar.vue')
      },
      {
        path:'my',
        name:'my',
        component:()=>import('../views/home/My.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
