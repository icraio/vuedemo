<template>
  <div>
    <h2>当前求和为{{ $store.state.sum }}</h2>
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
  methods: {
    increment () {
    },
    decrement () {

    },
    incrementOdd () {

    },
    incrementAsync () {
      setTimeout(()=>{

      },500)
    }
  }
}
</script>

<style scoped>

</style>
