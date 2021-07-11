<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
    <span>state中name的值{{ name }}</span>
    <h2>当前求和为{{ bigSum }}</h2>
    <br>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>&nbsp;
    <button @click="increment(n)">+</button>&nbsp;
    <!--    <button @click="decrement">-</button>&nbsp;-->
    <!--    <button @click="incrementOdd">奇数再加</button>&nbsp;-->
    <!--    <button @click="incrementAsync">异步加</button>&nbsp;-->
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Count',
  data () {
    return {
      n: 1 //用户所选择的数字
    }
  },
  mounted () {
    // const x = mapState({sum: 'sum'})  //这mapState()中的部分可以自动生成computed中注释部分里sum(){}的代码
    // console.log(x)
  },
  computed: {
    //自己学计算属性定义sum，值来自于state中的sum
    // sum () {
    //   return this.$store.state.sum
    // },

    //靠mapState生成计算属性[这里是原始写法]
    // ...mapState({
    //   sum:'sum', //arg1:arg2 中 arg1控制的是组件中模板读取的属性。arg2控制的是读取state中的对应属性
    //   name:'name'
    // }),

    /* -------------------------------------- */

    //用mapstate生成计算属性[精简版]
    ...mapState(['sum', 'name']),

    //自己写计算属性定义bigSum，值来自于getters中的bigSum
    // bigSum () {
    //   return this.$store.getters.bigSum
    // }

    ...mapGetters(['bigSum']),

    /* -------------------------------------- */

  },
  // computed:{
  //   fmtSum(){
  //     return this.$store.state.sum *100
  //   }
  // },

  methods: {

    //靠自己写方法，和mutations中的JIA对话，完成加法
    /*    increment (value) {
          this.$store.commit('JIAFA', value)
        },*/

    ...mapMutations({
      increment:'JIA'
    })


    /*    decrement () {
          this.$store.commit('JIANFA', this.n)
        },
        incrementOdd () {
          this.$store.dispatch('jishujia', this.n)
        },
        incrementAsync () {
          this.$store.dispatch('yibujia', this.n)
        }*/
  }
}
</script>

<style scoped>

</style>
