<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <h1>请发表对vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <div class="row">
      <Add :addComment="addComment"/>
      <list :comments="comments" :deleteComment="deleteComment"/>
    </div>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'

export default {
  data(){
    return {
      comments:[ //数据在哪个组件，更新数据的行为(方法)就应该定义在哪个组件
        {
          name:'BOB',
          content:'Vue 还不错'
        },
        {
          name:'Cat',
          content:'Vue 一般般'
        },
        {
          name:'EZ',
          content:'Vue 简单'
        }

      ]
    }
  },
  methods:{
    addComment(comment){
      //在数组开头添加数据：unshift()
      this.comments.unshift(comment)
    },
    //删除指定下标的评论
    deleteComment(index){
      this.comments.splice(index,1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style scoped>

</style>
