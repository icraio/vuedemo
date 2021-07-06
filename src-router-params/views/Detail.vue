<template>
  <ul>
    <li>ID：{{$route.params.id}}</li>
    <li>Title：{{$route.params.title}}</li>
    <li>Content：{{$route.params.content}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  mounted () {
    console.log(this)
  }
}
</script>

<style scoped>

</style>
