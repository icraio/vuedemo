<template>
  <ul class="todo-main">
    <todo-item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo">

    </todo-item>
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  props:{
    todos:Array,
    deleteTodo:Function
  },
  components:{
    TodoItem
  }
}
</script>

<style scoped>
.todo-main{
  margin-left: 0;
  border:1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty{
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


</style>
