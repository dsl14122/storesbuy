
import Vue from 'vue'
//导入路由
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 写组件
import index from "./components/index.vue"
import detail from "./components/detail.vue"
import userContainer from "./components/userContainer.vue"
import userIndex from "./components/userIndex.vue"
import userOrder from "./components/userOrder.vue"
import userDetail from "./components/userDetail.vue"
//写规则
const  routes=[
   { path:"/", redirect:"/index"},
   { path:"/index", component:index},
   { path:"/detail/:id", component:detail},
   { path:"/user", component:userContainer,children:[
     {path:"", component:userIndex},
     {path:"userIndex", component:userIndex},
      {path:"userOrder", component:userOrder},
      {path:"userDetail", component:userDetail},
   ]},
   
]

const router = new VueRouter({
 routes // (缩写) 相当于 routes: routes
})
export default router