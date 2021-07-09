//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用插件
Vue.use(Vuex)

//初始化状态，要写成一个对象，包含n组：key=>value，因为state要管理n个组件的状态
const state = {
  sum: 0
}

//创建一个actions，值为一个对象，包含：n个响应组件“动作“的函数
const actions = {
  jia(a,b){
    console.log(a,b)
  }
}

//创建store用于管理：state对象、actions对象、mutations对象
const store = new Vuex.Store({
  state,
  actions
})

//暴露store
export default store
