import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quienes_somos',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue'),
  },
  {
    path: '/inicio_sesion',
    name: 'InicioSesion',
    component: () => import(/* webpackChunkName: "inicio_sesion" */ '../views/InicioSesion.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
