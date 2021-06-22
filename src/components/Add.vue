<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="username">
          <b>用户名</b>
        </label>
        <input type="text" id="username" class="form-control" placeholder="用户名" style="width: 353px" v-model="name">
      </div>
      <div class="form-group">
        <label for="cont"><b>评论内容</b></label><br>
        <textarea class="form-control" id="cont" cols="46" rows="6" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-offset-2 col-sm-10">
          <button type="button" class="btn btn-default float-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props:{
    addComment: { // 指定属性名、属性值的类型/必要性
      type:Function,
      require: true
    }
  },

  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add () {
      //1. 检查输入的合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert("姓名或内容不能为空")
        return
      }

      //2， 根据输入的数据，封装成一个comment对象
      const comment = {
        name,
        content
      }
      //3. 添加到comments中
        this.addComment(comment)
      //4. 清除输入
      this.content = ''
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>
