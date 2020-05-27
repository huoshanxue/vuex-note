<template>
  <div>
    <!-- <h3>当前最新的count值为：{{$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="add">+1</button>
    <button @click="addN">+N</button>
    <button @click="addAnyscBtn">+1 async</button>
    <button @click="addNAnyscBtn">+N async</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    add () {
      // 触发mutation
      this.$store.commit('add')
    },
    addN () {
      this.$store.commit('addN', 5)
    },
    // 异步让count+1
    addAnyscBtn () {
      // dispatch函数，专门触发action
      this.$store.dispatch('addAsync')
    },
    addNAnyscBtn () {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>
