import Vue from 'vue'
import App from './App.vue'
//导入路由
import VueRouter from "vue-router"
// 导入全局样式
import './assets/css/style.css'
Vue.use(VueRouter)
//导入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false

// 写组件
 import index from "./components/index.vue"
 import detail from "./components/detail.vue"
//写规则
const  routes=[
    { path:"/index", component:index},
    { path:"/detail/:id", component:detail},

]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
