<template>
  <div class="todo-footer">
      <input type="checkbox" v-model="isAllCheck">
    <span>
      <span>已完成{{ completeSize }}</span>/全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>

    <button class="btn new btn-danger" v-show="completeSize" @click="deleteallcontent">清除全部</button>
  </div>

</template>

<script>
export default {
  props: {
    todos: Array,
    deleteCompleteTodos: Function,
    selectAllTodos: Function,
    deleteallcontent:Function
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
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

.new{
  margin: 5px;
}
</style>
