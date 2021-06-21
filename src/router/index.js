import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '小析のBlog'
    }
  },
  {
    path: '/guiDan',
    name: 'guiDan',
    component: () => import('views/GuiDan.vue')
  },
  {
    path: '/qingDan',
    name: 'qingDan',
    component: () => import('views/QingDan.vue')
  },
  {
    path: '/lettleSay',
    name: 'lettleSay',
    component: () => import('views/LettleSay.vue')
  },
  {
    path: '/lmessage',
    component: () => import('views/Lmessage.vue')
  },
  {
    path: '/friendsHref',
    name: 'friendsHref',
    component: () => import('views/FriendsHref.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('views/About.vue')
  },
  {
    path: '/backyard',
    name: 'backyard',
    component: () => import('views/Backyard.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
