<template>
<div>
  <h2>输入用户名搜索</h2>
  <h2>LOADING...</h2>
  <h2></h2>
  <div class="row">
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img :src="user.avatar_url" style="width: 100px;">
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>

</style>
