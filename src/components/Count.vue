<template>
  <div>
    <h2>当前求和为{{ $store.state.sum }}</h2>
    <h2>当前求和为{{ $store.getters.bigSum }}</h2>
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
export default {
  name: 'Count',
  data () {
    return {
      n: 1 //用户所选择的数字
    }
  },
  // computed:{
  //   fmtSum(){
  //     return this.$store.state.sum *100
  //   }
  // },
  mounted () {
    console.log(this.$store)
  },
  methods: {
    increment () {
      this.$store.dispatch('jia',this.n)
    },
    decrement () {
      this.$store.dispatch('jian',this.n)
    },
    incrementOdd () {
      this.$store.dispatch('jishujia',this.n)
    },
    incrementAsync () {
      this.$store.dispatch('yibujia',this.n)
    }
  }
}
</script>

<style scoped>

</style>
