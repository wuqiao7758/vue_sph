import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default new VueRouter({
	routes: [
		{
			path: '/home',
			component: Home,
			meta: { show: true },
		},
		{
			path: '/login',
			component: Login,
			meta: { show: false },
		},
		{
			path: '/register',
			component: Register,
			meta: { show: false },
		},
		{
			path: '/search/:keyWord',
			component: Search,
			meta: { show: true },
		},
		// 路由重定向
		{
			path: '*',
			redirect: '/home',
		},
	],
})
