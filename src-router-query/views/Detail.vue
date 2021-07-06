<template>
  <ul>
    <li>ID：{{id}}</li>
    <li>Title：{{title}}</li>
    <li>Content：{{content}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  computed:{
    id(){
      return this.$route.query.id
    },
    title(){
      return this.$route.query.title
    },
    content(){
      return this.$route.query.content
    }
  }
}
</script>

<style scoped>

</style>
