import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/characters/:page?',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "Characters" */ '../views/Characters.vue')
  },
  {
    path: '/episodes/:page?',
    name: 'Episodes',
    alias: '/:page?',
    component: () => import(/* webpackChunkName: "Episodes" */ '../views/Episodes.vue')
  },
  {
    path: '/locations/:page?',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "Locations" */ '../views/Locations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
