import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  
  {
    path: '/',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  },
  {
    path: '/prize',
    name: 'prize',
    component: () => import(/* webpackChunkName: "prize" */ '../views/Prize.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "Users" */ '../views/Users.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
