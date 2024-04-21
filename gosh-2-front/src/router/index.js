import { createRouter, createWebHistory } from 'vue-router'
import ShowcaseView from '@/views/ShowcaseView.vue'
import SessionsView from "@/views/SessionsView.vue"
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShowcaseView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/app',
      name: 'showcase',
      component: ShowcaseView
    },
    {
      path: '/session/:id',
      name: 'session',
      component: ShowcaseView
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: SessionsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
