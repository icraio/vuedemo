/*
  使用LocalStorage存储数据的工具模块
  1. 函数
  2.对象
  向外暴露1个功能还是多个功能
*/
const TODOS_KEY ='todos_keys' //将todos_keys赋给一个变量
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))

  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')

  }
}
