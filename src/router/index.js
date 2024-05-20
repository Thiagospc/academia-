import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicos',
    name: 'serviços',
    component: () => import('../views/ServicosView.vue')
  },
  {
    path: '/usuario/:id',
    name: 'usuarioEdit',
    component: () => import('../views/UserEdit.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
