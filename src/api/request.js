import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = axios.create({
	// 配置对象
	// 基础路径
	baseURL: '/api',
	// 请求超过的事件
	timeout: 3000,
})

// 请求拦截器
requests.interceptors.request.use(
	config => {
		nprogress.start()
		return config
	},
	() => {}
)
// 响应拦截器
requests.interceptors.response.use(
	res => {
		nprogress.done()
		return res.data
	},
	err => {
		console.log(err)
	}
)
export default requests
