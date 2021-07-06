/*
路由器模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import Home2 from '../views/Home2'
import Message from '../views/Message'
import News from '../views/News'
import Detail from '../views/Detail'

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
      component: Home,
      // components: {
      //   h1:Home,
      //   h2:Home2}
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children:[
            {
              path:'detail/:id/:title/:content',
              component:Detail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
