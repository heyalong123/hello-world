import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', redirect: '/login' },
    { path: '/user', component: User },
  ],
})

export default router
