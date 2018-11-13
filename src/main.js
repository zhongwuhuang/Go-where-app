import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' //解决移动端点击300毫秒的延迟
fastclick.attach(document.body)
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //等于router:router(es6语法)
  render: h => h(App)
})
