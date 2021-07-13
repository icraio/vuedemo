<template>
  <!--

  -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{ todo.title }}</span>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  data () {
    return {
      bgColor: 'white',//默认的背景颜色
      isShow: false, //按钮默认是否显示
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = 'gray'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      const {todo, index, deleteTodo} = this
      if (window.confirm(`确认删除${todo.title}吗？`)) {
        deleteTodo(index)
      }
    }
  }
}
</script>

<style scoped>
/*下面是item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: inherit;
}

li:last-child {
  border-bottom: none;
}
</style>
