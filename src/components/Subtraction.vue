<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="sub1">-1</button>
    <button @click="btnsubN">-N</button>
    <button @click="subN(3)">-N</button>
    <button @click="btnsubAsync">-1 async</button>
    <button @click="subAsync">-1 async 直接作为函数</button>
    <button @click="subNAsync(10)">-N async 直接作为函数</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    // 方式二 调用mutations
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    sub1 () {
      this.sub()
    },
    btnsubN () {
      this.subN(3)
    },
    btnsubAsync () {
      this.subAsync()
    }
  }
}
</script>
