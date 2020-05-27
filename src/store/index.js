import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储的数据
  state: {
    count: 0
  },
  // 变更store的数据 只有在mutations修改数据
  // 触发 1 commit 2 mapMutation方法
  // mutations 中不能够执行异步代码
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  // action 用于处理异步任务，但是action中还是要通过触发mutation的方式间接变更数据
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // 在action中不能够直接修改state数据
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        // 在action中不能够直接修改state数据
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // 在action中不能够直接修改state数据
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        // 在action中不能够直接修改state数据
        context.commit('subN', step)
      }, 1000)
    }
  },
  // this.$store.getters.名称 调用
  getters: {
    showNum (state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  },
  modules: {
  }
})
