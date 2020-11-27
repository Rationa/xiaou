// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/js/remScale'
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './assets/css/resetVant.css'

import vantUI from 'vant'
Vue.use(vantUI)
import 'vant/lib/index.css'

Vue.prototype.$imgUrl = 'http://localhost:3000'

import comComponents from './common'
for (let i in comComponents) {
  Vue.component(i, comComponents[i])
}

router.beforeEach((to, from, next) => {
  if(to.path == '/login'){
    next();
    return
  }
  if(localStorage.getItem('isLogin')){
    next();
    return
  }
  next('/login')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
