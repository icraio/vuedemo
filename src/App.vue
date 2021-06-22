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
      <Add/>
      <list :comments="comments"/>
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
      comments:[
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
  components: {
    Add,
    List
  }
}
</script>

<style scoped>

</style>
