<template>
  <div class="container">
    <Search></Search>
    <users-main></users-main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
