import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入normalize.css
import 'normalize.css'
// 引入mock
import './mock.js'
// 引入store
import store from './store/index.js'

import Cookies from 'js-cookie'

// 引入表单验证
import VeeValidate, {
  Validator
} from 'vee-validate'
Vue.use(VeeValidate, {
  fieldsBagName: 'vee-fields'
})

// 汉化表单验证
import zhCN from 'vee-validate/dist/locale/zh_CN'
Validator.localize('zh_CN',
  zhCN)

Vue.use(ElementUI)

Vue.config.productionTip = false

// 设置路由拦截
router.beforeEach((to, from, next) => {
  let name = Cookies.get('name') || store.state.name
  // 如果cookie没有过期或者store中有name值,则允许访问直接通过。否则就让用户登录
  if (name) {
    store.commit('loginIn', name)
    next()
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({
        name: 'Login'
      })
      store.commit('loginOut')
    }
  }
})

router.afterEach(() => {})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')