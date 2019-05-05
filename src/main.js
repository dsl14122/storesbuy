import Vue from 'vue'
// 导入路由
import router from './router.js'
import App from './App.vue'

// 导入全局样式
import './assets/css/style.css'

//导入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false
//原型中设置axios
import axios from "axios";
 Vue.prototype.$axios=axios
//设置axios 基地址
axios.defaults.baseURL='http://111.230.232.110:8899'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
