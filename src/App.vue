<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  components:{
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style scoped>
.todo-container{
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
