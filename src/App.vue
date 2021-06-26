<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--      <todo-header @addTodo="addTodo"/>&lt;!&ndash;      给todoHeader标签对象绑定addTodo事件监听,但是这种方法只能用于父子组件之间传递&ndash;&gt;-->
      <todo-header ref="header"></todo-header>
      <TodoList :todos="todos"/>
<!--      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"-->
<!--                  :selectAllTodos="selectAllTodos"></TodoFooter>-->
      <todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll">
        <span slot="count">已完成{{ completeSize }}/全部{{ todos.length }}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>-->
      </todo-footer>
    </div>
  </div>
</template>
<!--
绑定事件监听 ····订阅消息
触发事件  ----发布消息
-->

<script>
// pubsub的组件通信没有任何位置的要求
import PubSub from 'pubsub-js'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data () {
    return {
      //从本地文件中读取数据（类似安卓的sharepreference），而不是写死数据
      //从LocalStorage读取todos，得到的是字符串类型
      //通过JSON.pares()将字符串数据转变成
      todos: JSON.parse(window.localStorage.getItem('todos_keys') || '[]')
      // todos: [
      //   {title: '吃饭', complete: false},
      //   {title: '睡觉', complete: true},
      //   {title: 'coding', complete: false}
      // ]
    }
  },
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set (value) { //value 是当前checkbox最新的值
        this.selectAllTodos(value)
      }
    },

  },
  mounted () { //执行异步代码
    // 给<todo-header/>标签绑定addTodo事件监听
    // this.$on('addTodo',this.addTodo)//这是在给app绑定监听，这是错的
    this.$refs.header.$on('addTodo', this.addTodo)

    //订阅消息
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    //删除所有选中的todo
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    //全选/全不选
    selectAllTodos (check) {
      this.todos.forEach(todo => todo.complete = check)
    }
  },

  watch: {//深度监视
    todos: {
      deep: true, //深度监视
      handler: function (Value) {
        //将todos最新的值的json数据，保存到LocalStorage
        window.localStorage.setItem('todos_keys', JSON.stringify(Value))
      }
    }
  },

  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
