import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/important',
    name: 'Important',
    component: () => import('@/views/Important.vue'),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('@/views/Rules.vue'),
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('@/views/Join.vue'),
  },
  {
    path: '/entry-check',
    name: 'EntryCheck',
    component: () => import('@/views/EntryCheck/EntryCheck.vue'),
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
