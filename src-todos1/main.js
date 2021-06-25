import Vue from 'vue'
import App from './App'

import './base.css'
//在main.js中引用的文件在任何组件中都有效
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>'
})

