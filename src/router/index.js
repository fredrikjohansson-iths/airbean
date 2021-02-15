import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ProfilePage',
    name: 'ProfilePage',
    component: () => import('../views/ProfilePage.vue')
  },
  {
    path: '/ProductMenu',
    name: 'ProductMenu',
    component: () => import('../views/ProductMenu.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
