import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home/Home.vue'
import AboutPage from '@/views/About/About.vue'
import NotFoundPage from '@/views/NotFound/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{ path: '/', component: HomePage },
	{ path: '/about', component: AboutPage },
	{ path: '/:catchAll(.*)', component: NotFoundPage },
  ],
})

export default router
