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
#### 上面是一类数据传输方法，对于函数的传输还有：  
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
//首先引入pubsub
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
