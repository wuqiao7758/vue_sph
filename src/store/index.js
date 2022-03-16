import Vue from 'vue'
import Vuex from 'vuex'
import { reqCategoryList } from '@/api'
Vue.use(Vuex)

// Sreach模块仓库
const sreachAbout = {
	namespaced: true,
	state: {},
	actions: {},
	mutations: {},
	getters: {},
}

// home模块仓库
const homeAbout = {
	namespaced: true,
	state: {
		categoryList: [],
	},
	actions: {
		async categoryList({ commit }) {
			let res_data = await reqCategoryList()
			commit('CATEGORYLIST', res_data)
		},
	},
	mutations: {
		async CATEGORYLIST(state, categoryList) {
			state.categoryList = await categoryList.data.splice(0, 16)
		},
	},
	getters: {},
}
//

export default new Vuex.Store({
	modules: {
		sreachAbout: sreachAbout,
		homeAbout: homeAbout,
	},
})
