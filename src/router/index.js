import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    redirect:'/home/recommend',
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
	redirect:'/home/recommend',
	children:[
		{
			path: 'recommend',
			name: 'recommend',
			component: () => import('@/views/Recommend.vue')
		},
		{
			path: 'ranking',
			name: 'ranking',
			component: () => import('@/views/Ranking.vue')
		},
		{
			path: 'classification',
			name: 'classification',
			component: () => import('@/views/Classification.vue')
		},
	]
  },
  {
	path: '/search',
	name: 'search',
	component: () => import('@/views/Search.vue')
},
  {
	path: '/cfdetail',
	name: 'cfdetail',
	component: () => import('@/views/Cfdetail.vue')
},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
