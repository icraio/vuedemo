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
          children: [
            {
              //声明接收params参数
              // path:'detail/:id/:title/:content',
              // path:'detail',//query参数无需声明即可接收
              path: 'detail/:id',//同时接受params和query
              component: Detail,
              name: 'xiangqing',
              // props: {carName: '特斯拉'}//通过props映射自定义的静态数据
              // props:true//映射params参数为props传给路由组件
              props (route) { //这里形参route实际是vc下的$route
                const {id} = route.params
                const {title,content} = route.query
                return {id,title,content}
              }
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
