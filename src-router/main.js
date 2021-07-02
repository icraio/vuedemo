import Vue from 'vue'
import App from './App'
import router from 'router'

//在main.js中引用的文件在任何组件中都有效

new Vue({//配置对象的属性名都是一些确定的名称，不能随便修改
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})

