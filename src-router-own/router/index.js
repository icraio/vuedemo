/*
路由器模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import Home2 from '../views/Home2'

Vue.use(VueRouter)

export default new VueRouter({
  //n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      components: {
        h1:Home,
        h2:Home2}
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
