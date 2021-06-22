<template>
  <div class="col-md-4">
   <div>
     <label for="username">
       <b>用户名</b>
     </label>
     <input type="text" id="username" placeholder="用户名" style="width: 353px">
   </div>
    <div>
      <label for="cont"><b>评论内容</b></label><br>
      <textarea name="" id="cont" cols="46" rows="5"></textarea>
    </div>

    <input type="submit" value="提交" style="float: right">
  </div>
</template>

<script>
export default {
  name: 'Add'
}
</script>

<style scoped>

</style>
