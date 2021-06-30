<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <div class="row">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px;">
        </a>
        <p class="card-text">{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'

export default {
  data () {
    return {
      firstView: true,
      loading: false,
      users: null, //[{url:'',avatar_url:'',name:''}]
      errorMsg: ''
    }
  },
  mounted () { //是否在此发送ajax请求   不是，而是在点击search之后
    //订阅搜索消息
    PubSub.subscribe('search', (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`

      //更新状态(请求中)
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''
      //发送ajax请求
      axios.get(url).then(response => {
        const result = response.data
        const users = result.items.map(item => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))
        //成功，更新状态(成功)
        this.loading = false
        this.users = users
      }).catch(error => {
        //失败，更新状态(失败)
        this.loading = false
        this.errorMsg = '请求失败'
      })
    })
  }

}
</script>

<style scoped>

</style>
