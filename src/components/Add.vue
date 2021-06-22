<template>
  <div class="col-md-4">
   <div>
     <label for="username">
       <b>用户名</b>
     </label>
     <input type="text" id="username" placeholder="用户名">
   </div>
    <div>
      <label for="cont"><b>评论内容</b></label><br>
      <textarea name="" id="cont" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add'
}
</script>

<style scoped>

</style>
