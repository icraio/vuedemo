<template>
  <ul class="todo-main">
    <todo-item></todo-item>
  </ul>
</template>

<script>
export default {
  name: 'TodoHeader'
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

/*下面是item*/
li{
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label{
  float: left;
  cursor: pointer;
}

li label li input{
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button{
  float: right;
  display: none;
  margin-top: 3px;
}

li:before{
  content: inherit;
}

li:last-child{
  border-bottom: none;
}
</style>
