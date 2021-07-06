# vuedemo

> A Vue.js project

这是我自己对vue-cli组件学习的记录

# 笔记

1. vue属于组件化编写代码，通过将不同部分的功能代码不断拆分成不同的代码块来调用，从而实现一个完整的页面：
&emsp;&emsp;首先在最外部分有一个index.html页面，这是所有组件最终汇集的文件，里面只有一个id为app(这个id可以自己定义，默认app)的div
&emsp;&emsp;而组件代码中，html部分放在了template标签中，但是template标签子集只能是一个div标签，也就是说，将一个代码块搬到组件*.vue文件的template标签中时，必须要用一个完整的div来包裹

### base1
&emsp;&emsp;父组件引用子组件：在子组件的位子写好子组件名称的标签，
```
    //这三种格式都可以
    <todo-header/>
    <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
    <TodoFooter></TodoFooter>
```

然后再components中声明一下：
```
    components:{
        TodoHeader,
        TodoList,
        TodoFooter
      }
```

2. 对于想要强制绑定的元素，可以省略v-bind在前面加上":"即可，如（:index="index"）

3. 对于数据/方法的位置，选择放在父组件内，然后通过组件通信传递给其它组件：
###### &emsp;这里要声明：组件通信传值传出去的名称都是":"后面的名称，这里建议直接一个值对应一个名称一直传下去
&emsp;父组件暴露：
```
    <Add :addComment="addComment"/>
    //上面引号内的addComment是一个方法
    <list :comments="comments" :deleteComment="deleteComment"/>
    //上面引号内comments是一个数组对象数据，deleteComment是一个方法
```
&emsp;子组件接收：
```
  //方法一：
  props: ['comments', 'deleteComment'],//这种方式只指定属性名

  //方法二：
  props:{
    addComment: { // 指定属性名、属性值的类型/必要性
      type:Function,
      require: true
    },

   //方法三：
   props:{ //指定属性名和属性值的类型
    comment:Object,
    deleteComment:Function,
    index:Number
   },
```

### 对于组件的引用还有一种方法是slot插槽，当我们将多次重复调用某一个组件的时候，可以使用slot
&emsp;&emsp;在父组件中使用slot调用子组件的时候，slot属性要与子组件的name属性对应，并且，子组件中相关的计算属性调到父组件中：
&emsp;父组件template中：
```
 <span slot="count">已完成{{ completeSize }}/全部{{ todos.length }}</span>
```
&emsp;父组件computed中：
```
  computed: {
    completeSize () {
          return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
        },
  }
```

&emsp;子组件template中：
```
<slot name="count"></slot>
```


#### 上面是一类数据组件传输方法，对于函数的传输还有：
### todos2
1. 给标签对象绑定事件监听：(这种方法只能用于父子组件之间传递)
&emsp;父组件:
```
  //标签中
  <todo-header @addTodo="addTodo"/> // 给todoHeader标签对象绑定addTodo事件监听,但是这种方法只能用于父子组件之间传递

  //在mounted()中
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    }
  }
```
&emsp;&emsp;&emsp;子组件:
```
//在methods中使用$emit()
  const todo = {
        title,
        complete:false
      }
  this.$emit('addTodo',todo)
```
2. 使用ref传递
使用ref传递的话需要使用mounted(){//执行异步代码}
&emsp;父组件：
```
//标签中
<todo-header ref="header"></todo-header>

//在mounted()中
  mounted () { //执行异步代码
    // this.$on('addTodo',this.addTodo)//这是在给app绑定监听，这是错的
    this.$refs.header.$on('addTodo',this.addTodo)
  },
```
&emsp;子组件：
```
 this.$emit('addTodo',todo)
```
3. 使用pubsub组建通信
&emsp;&emsp;引入pubsub之后可以直接调用方法
```
//首先在需要使用pubsub的组件中引入pubsub
import PubSub from 'pubsub-js'
```
&emsp;父组件：
```
//在mounted()中直接调用PubSub的方法
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
```
&emsp;子组件：
```
//deleteItem()中使用：
    deleteItem () {
      const {todo, index, deleteTodo} = this
      if (window.confirm(`确认删除${todo.title}吗？`)) {
        // deleteTodo(index)
        //发布消息
        PubSub.publish('deleteTodo', index)
      }
    }
```

4. 发送ajax请求

##### vue-resource
  1. 首先是在main.js中引入vue-resource组件库，并且声明使用插件
  ```
  import VueResource from 'vue-resource'
  //声明使用插件
  Vue.use(VueResource) //内部会给vm对象和组件对象添加一个属性：$http
  ```
  2. 然后再需要使用ajax请求的组件中的初始化对象中调用$http属性
  ```
    mounted () {
    //发送ajax请求获取数据
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    this.$http.get(url).then(
      //成功
      response => {
        const result = response.data
        //得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      },
      response => {
        alert('请求失败')
      }
    )
  }
  ```
  ##### axios
  1. 首先在需要在需要发送ajax请求的组件中引入axios
  ```
  import axios from 'axios'
  ```
  2. 然后跟vue-resource一样在mounted()中调用axios方法

  ```
      axios.get(url).then(response => {
      //成功
      const result = response.data
      const mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoName = mostRepo.name
    }).catch(error =>{
      alert('请求失败')
    })
  ```
###### 这里请求报错使用的是catch(error=>{})

#### 路由router
1. 使用路由的话，需要使用router插件。在src的目录下，创建一个router文件夹，用来存放专门适配vue项目中所有路由的js文件
&emsp;在index.js中引入vue以及vue-router组件，再使用Vue.use（）调用该组件，然后定义一个新的VueRouter对象，在其中将路由的路径和对应组件以对象的形式配对后，将VueRouter暴露出去
&emsp;一个路由配置一个组件就使用component
&emsp;一个路由配置多个组件就使用components
```
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

Vue.use(VueRouter)

export default new VueRouter({
  //n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
    //这里是一个/home路由对应了多个组件
    //但是对应的router-view
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
```
3. 在main.js中引入之前配置的index.js文件，再声明router
```
//引入路由配置
import routr from './router'
```
&emsp;&emsp;在vue对象中声明
```
new vue({
  router//这里是router：router的简写
})
```
###### 多级路由
1. 在上一级路由的对象中使用children属性，子路由children中的path路径可以简写（省略父路由的路径，注意不用开头写‘/’）

```
export default new VueRouter
routes:[
  {
        path: '/home',
      component: Home,
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
              path:'detail',
              component:Detail
            }
          ]
        }
      ]}
]
```

#### 路由传参
1. params传参
&emsp;&emsp;params传参主要是通过路由器路径去传递参数，这里涉及到vc对象中params属性：
&emsp;&emsp;&emsp;先是在父组件中路由传参，通过强制绑定将msg中的各个参数传出
```
//在index.js中声明接收params参数
{
          path: 'message',
          component: Message,
          children:[
            {
            //声明接收params参数
              path:'detail/:id/:title/:content',
              component:Detail
            }
          ]
        }
```
```
//Message.vue中
<router-link :to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`">{{ msg.title }}</router-link>
```
&emsp;&emsp;&emsp;通过':to="``"'传出参数后，在vc对象中的params属性则解析出了所传的数据
```
//在{{}}中，直接默认为vc对象(相当于直接有了this)，直接使用vc对象中的$route.params属性
<li>ID：{{$route.params.id}}</li>
```

2. query动态传参
&emsp;&emsp;&emsp;在router-link里的:to=""属性中，直接使用query格式的传参
```
<router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}&content=${msg.content}`">
        {{msg.title}}
      </router-link>
```
&emsp;&emsp;&emsp;在Detail组件中直接调用query属性内的数据
```
<template>
  <ul>
    <li>ID：{{this.$route.query.id}}</li>
    <li>Title：{{title}}</li>
    <li>Content：{{content}}</li>
  </ul>
</template>

export default {
  computed:{
    title(){
      return this.$route.query.title
    },
    content(){
      return this.$route.query.content
    }
  }
}
```
