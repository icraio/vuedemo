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
    <button @click="increment(n)">+</button>&nbsp;&nbsp;
    <button @click="decrement(n)">-</button>&nbsp;&nbsp;
    <button @click="incrementOdd(n)">奇数再加</button>&nbsp;
    <button @click="incrementAsync(n)">异步加</button>&nbsp;
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'Count',
  data () {
    return {
      n: 1 //用户所选择的数字
    }
  },
  mounted () {
    /*    // const x = mapState({sum: 'sum'})  //这mapState()中的部分可以自动生成computed中注释部分里sum(){}的代码
        // console.log(x)*/
  },
  computed: {
    /*    自己学计算属性定义sum，值来自于state中的sum
        sum () {
          return this.$store.state.sum
        },

        靠mapState生成计算属性[这里是原始写法]
        ...mapState({
          sum:'sum', //arg1:arg2 中 arg1控制的是组件中模板读取的属性。arg2控制的是读取state中的对应属性
          name:'name'
        }),*/

    /* -------------------------------------- */

    //用mapstate生成计算属性[精简版]
    ...mapState(['sum', 'name']),

    //自己写计算属性定义bigSum，值来自于getters中的bigSum
    /*    bigSum () {
          return this.$store.getters.bigSum
        }*/

    ...mapGetters(['bigSum']),

    /* -------------------------------------- */

  },
  /*  computed:{
      fmtSum(){
        return this.$store.state.sum *100
      }
    },*/

  methods: {

    /*    //靠自己写方法，和mutations中的JIA对话，完成加法
        /!*  increment (value) {
              this.$store.commit('JIAFA', value)
            },
            decrement () {
              this.$store.commit('JIANFA', this.n)
            },
        *!/

        //靠mapMutations生成函数，和mutations中的方法对话，完成操作
        //mapMutations也能简写成数组的形式，但必须保证mutations中的函数名和组件中的事件的回调同名*/
    ...mapMutations({
      increment: 'JIAFA',
      decrement: 'JIANFA'
    }),

    /*
        //靠自己写incrementOdd方法，和actions中的jishujia对话，完成奇数加操作
        //靠自己写incrementAsync方法，和actions中的yibujia对话，完成异步加操作
        /!*    incrementOdd () {
              this.$store.dispatch('jishujia', this.n)
            },
            incrementAsync () {
              this.$store.dispatch('yibujia', this.n)
            }*!/
    */

    /* -------------------------------------- */

    ...mapActions(['incrementOdd', 'incrementAsync'])
  }
}
</script>

<style scoped>

</style>
