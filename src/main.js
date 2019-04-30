import Vue from 'vue'
import App from './App.vue'
//导入路由
import VueRouter from "vue-router"
// 导入全局样式
import './assets/css/style.css'


Vue.use(VueRouter)

Vue.config.productionTip = false

// 写组件
 import index from "./components/index.vue"
//写规则
const  routes=[
    { path:"/index", component:index}

]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
