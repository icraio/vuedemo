<template>
  <div>
    <ul>
      <li v-for="msg in messageArr" :key="msg.id">
        <router-link :to="{name:'xiangqing',params:{id:msg.id},query:{title:msg.title,content:msg.content}}">
          {{ msg.title }}
        </router-link>
        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>
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

  methods: {
    pushShow (msg) {
      this.$router.push({name:'xiangqing',params:{id:msg.id},query:{title:msg.title,content:msg.content}})
    },
    replaceShow(msg){
      this.$router.replace({name:'xiangqing',params:{id:msg.id},query:{title:msg.title,content:msg.content}})

    }
  }

}
</script>

<style scoped>

</style>
