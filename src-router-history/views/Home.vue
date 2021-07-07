<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" replace to="/home/news">New</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" replace to="/home/message">Message</router-link>
        </li>
      </ul>
      <keep-alive include="News">
<!--        //include中的是组件中name的值-->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name:'Home'
}
</script>

<style scoped>

</style>
