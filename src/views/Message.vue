<template>
<div>
  <ul>
    <li v-for="msg in messageArr" :key="msg.id">
      <router-link to="/home/message/detail">{{ msg.title }}</router-link>
    </li>
  </ul>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'Message',
  data(){
    return {
      messageArr:[
        {
          id:'001',
          title:'消息1',
          content:'看电影'
        },
        {
          id:'002',
          title:'消息2',
          content:'看电视'
        },
        {
          id:'002',
          title:'消息2',
          content:'打游戏'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
