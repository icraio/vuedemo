<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
    <h2>当前求和为{{ bigSum }}</h2>
    <!--    <span>{{a}}</span>-->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>&nbsp;
    <button @click="increment">+</button>&nbsp;
    <button @click="decrement">-</button>&nbsp;
    <button @click="incrementOdd">奇数再加</button>&nbsp;
    <button @click="incrementAsync">异步加</button>&nbsp;
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      n: 1 //用户所选择的数字
    }
  },
  mounted () {
    const x = mapState({sum: 'sum'})  //这mapState()中的部分可以自动生成computed中注释部分里sum(){}的代码
    console.log(x)
  },
  computed: {
    //自己学计算属性定义sum，值来自于state中的sum
    // sum () {
    //   return this.$store.state.sum
    // },



    //靠mapState生成计算属性



    /* -------------------------------------- */

    //自己写计算属性定义bigSum，值来自于getters中的bigSum
    // bigSum () {
    //   return this.$store.getters.bigSum
    // }
  },
  // computed:{
  //   fmtSum(){
  //     return this.$store.state.sum *100
  //   }
  // },

  methods: {
    increment () {
      this.$store.dispatch('jia', this.n)
    },
    decrement () {
      this.$store.dispatch('jian', this.n)
    },
    incrementOdd () {
      this.$store.dispatch('jishujia', this.n)
    },
    incrementAsync () {
      this.$store.dispatch('yibujia', this.n)
    }
  }
}
</script>

<style scoped>

</style>
