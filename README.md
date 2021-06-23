# vuedemo

> A Vue.js project

这是vue-cli组件的学习

# 笔记

1. vue属于组件化编写代码，通过将不同部分的功能代码不断拆分成不同的代码块来调用，从而实现一个完整的页面：  
&emsp;&emsp;首先在最外部分有一个index.html页面，这是所有组件最终汇集的文件，里面只有一个id为app(这个id可以自己定义，默认app)的div  
&emsp;&emsp;而组件代码中，html部分放在了template标签中，但是template标签子集只能是一个div标签，  
&emsp;&emsp;也就是说，将一个代码块搬到组件*.vue文件的template标签中时，必须要用一个完整的div来包裹

2. 对于想要强制绑定的元素，可以省略v-bind在前面加上":"即可，如（:index="index"）  

3. 对于数据/方法的位置，选择放在父组件内，然后通过组件通信传递给其它组件：  
&emsp;父组件暴露：  
```
  <Add :addComment="addComment"/>
  //上面引号内的addComment是一个方法
  <list :comments="comments" :deleteComment="deleteComment"/>
  //上面引号内comments是一个数组对象数据，deleteComment是一个方法
```
&emsp;子组件接收：  
```
  //方法一：
  props: ['comments', 'deleteComment'],//这种方式只指定属性名
  
  //方法二：
  props:{
    addComment: { // 指定属性名、属性值的类型/必要性
      type:Function,
      require: true
    },
    
   //方法三：
   props:{ //指定属性名和属性值的类型
    comment:Object,
    deleteComment:Function,
    index:Number
   },
```
###### 这里要声明：组件通信传值传出去的名称都是":"后面的名称，这里建议直接一个值对应一个名称一直传下去

          
