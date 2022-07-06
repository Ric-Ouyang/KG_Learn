import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
// import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue'),
    children: [{
      name: 'OnlineUser',  //name配置项为路由命名,在线用户路由
      path: '/OnlineUser',
      component: () => import('../views/OnlineUser')
    },
    {
      name: 'Home',   //首页说明路由
      path: '/Home',
      component: () => import('../views/Home/Home.vue')
    },
    {
      name: 'UserInfo',   //用户信息管理路由
      path: '/UserInfo',
      component: () => import('../views/UserInfo')
    },
    {
      name: 'ValidCA',   //在册证书管理——生效证书路由
      path: '/ValidCA',
      component: () => import('../views/CAManager/ValidCA.vue')
    },
    {
      name: 'InvalidCA',   //在册证书管理——失效证书路由
      path: '/InvalidCA',
      component: () => import('../views/CAManager/InvalidCA.vue')
    },
    {
      name: 'ShowRisk',   //用户风险管理——风险展示
      path: '/ShowRisk',
      component: () => import('../views/RickManager/ShowRisk.vue')
    },
    {
      name: 'AccessControl',   //用户风险管理——接入控制
      path: '/AccessControl',
      component: () => import('../views/RickManager/AccessControl.vue')
    },
    ]
  },
  {
    name: 'Login',
    path: '/Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
