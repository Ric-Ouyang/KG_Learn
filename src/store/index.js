import Vue from 'vue'
import Vuex from 'vuex'	// 引入Vuex
import tab from './tab' // 引入vuex的state、mutations、actions文件

Vue.use(Vuex)	// 应用Vuex插件

/* const actions = {}		// 准备actions——用于响应组件中的动作
const mutations = {}	// 准备mutations——用于操作数据（state）
const state = {}			// 准备state——用于存储数据 */

// 创建并暴露store
export default new Vuex.Store({
/* 	actions,
	mutations,
	state, */
    modules: {
        tab
    }
})


/* import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}) */
