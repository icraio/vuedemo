import Vue from 'vue'
import App from './App1'
import VueResource from 'vue-resource'

//声明使用vue-resource插件
Vue.use(VueResource) //内部会给vm对象和组件对象添加一个属性：$http

//在main.js中引用的文件在任何组件中都有效
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>'
})

