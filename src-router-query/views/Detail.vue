<template>
  <ul>
    <li>ID：{{this.$route.query.id}}</li>
    <li>Title：{{this.$route.query.title}}</li>
    <li>Content：{{this.$route.query.content}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
}
</script>

<style scoped>

</style>
