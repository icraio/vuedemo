import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'

//应用插件
Vue.use(Vuex)

//初始化状态，要写成一个对象，包含n组：key=>value，因为state要管理n个组件的状态
const state = {
  sum: 0,
  name:'老刘'
}

//创建一个actions，值为一个对象，包含：n个响应组件“动作“的函数
const actions = {
  // jia (context, value) { //context是一个迷你版的$store，我们要用context.commit()去通知mutations加工状态
  //   context.commit('JIA', value)
  // },
  // jian (context, value) {
  //   context.commit('JIAN', value)
  // },
  jishujia (context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  yibujia (context, value) {
    setTimeout(() => {
      context.commit('YIBUJIA', value)
    }, 800)
  }
}

//创建一个mutations，值为一个对象，包含：n个真正用于加工状态的函数
const mutations = {
  JIA (state, value) {
    state.sum += value
  },
  JIAN (state, value) {
    state.sum -= value
  },
  YIBUJIA (state, value) {
    state.sum += value
  }
}

//getters中配置的是state中的数据经过加工后的值
const getters = {
  bigSum (state) {
    return state.sum * 100
  }
}

//创建store用于管理：state对象、actions对象、mutations对象 ------类似于Vue中的computed
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

//暴露store
export default store
