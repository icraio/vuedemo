<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <li class="list-group-item">
        <div class="handle">
          <a href="javascript:">删除</a>
        </div>
        <p class="user"><span>XXX</span><span>说：</span></p>
        <p class="centence">Vue不错！</p>
      </li>
      <li class="list-group-item">
        <div class="handle">
          <a href="javascript:">删除</a>
        </div>
        <p class="user"><span>YYY</span><span>说：</span></p>
        <p class="centence">有点难！</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style>
.reply{
  margin-top: 0;
}
li{
  transition: .5s;
  overflow: hidden;
}
.handle{
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}
.handle a{
  display: block;
}
</style>
