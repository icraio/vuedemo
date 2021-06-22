<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="username">
          <b>用户名</b>
        </label>
        <input type="text" id="username" class="form-control" placeholder="用户名" style="width: 353px">
      </div>
      <div class="form-group">
        <label for="cont"><b>评论内容</b></label><br>
        <textarea class="form-control" id="cont" cols="46" rows="6"></textarea>
      </div>
      <div class="form-group">
        <div class="col-offset-2 col-sm-10">
          <button type="button" class="btn btn-default float-right" >提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add'
}
</script>

<style scoped>

</style>
