import Vue from 'vue'
import Vuex from 'vuex'
// 引入js-cookie
import Cookies from 'js-cookie'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    loginIn(state, name) {
      state.name = name
      // 设置过期时间为1天
      Cookies.set('name', name, {
        expires: 1
      })
    },
    loginOut(state) {
      state.name = ''
      Cookies.remove('name')
    }
  }
})
export default store