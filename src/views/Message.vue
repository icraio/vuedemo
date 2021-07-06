<template>
  <div>
    <ul>
      <li v-for="msg in messageArr" :key="msg.id">
        <!--      切换路径时，携带query参数 -->

        <!--      <router-link :to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`">{{ msg.title }}</router-link>-->
        <!--      切换路径时，携带query参数 -->
        <!--      <router-link :to="`/home/message/detail/${msg.id}?title=${msg.title}&content=${msg.content}`">{{msg.title}}</router-link>-->
        <router-link
          :to="{name:'xiangqing',params:{id:msg.id},query:{title:msg.title,content:msg.content}}">
          {{ msg.title }}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      messageArr: [
        {
          id: '001',
          title: '消息1',
          content: '电影'
        },
        {
          id: '002',
          title: '消息2',
          content: '看电视'
        },
        {
          id: '003',
          title: '消息3',
          content: '打游戏'
        }
      ]
    }
  },

}
</script>

<style scoped>

</style>
