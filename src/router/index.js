import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import(/* webpackChunkName: "login" */ '../views/prijava.vue')
  },
  {
    path: '/unos',
    name: 'unos',
    component: () => import(/* webpackChunkName: "unos" */ '../views/unos.vue')
  },
  {
    path: '/pcekanje',
    name: 'pcekanje',
    component: () => import(/* webpackChunkName: "pcekanje" */ '../views/pcekanje.vue')
  },
  {
    path: '/pobr',
    name: 'pobr',
    component: () => import(/* webpackChunkName: "pobr" */ '../views/pobr.vue')
  },
  {
    path: '/puobr',
    name: 'puobr',
    component: () => import(/* webpackChunkName: "puobr" */ '../views/puobr.vue')
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import(/* webpackChunkName: "registracija" */ '../views/registracija.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
