import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import './assets/css/style.css'
Vue.use(VueRouter)
Vue.config.productionTip = false



const  routes=[

]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
