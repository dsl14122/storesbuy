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



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
