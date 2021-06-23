# vuedemo

> A Vue.js project

这是vue-cli组件的学习

1.对于想要强制绑定的元素，可以省略v-bind在前面加上":"即可，如（:index="index"）
2.对于数据/方法的位置，选择放在父组件内，然后通过组件通信传递给其它组件：
  父组件暴露：<Add :addComment="addComment"/>//其中引号内的addComment是一个方法
            ：<list :comments="comments" :deleteComment="deleteComment"/>//其中引号内comments是一个数组对象数据，deleteComment是一个方法

          
