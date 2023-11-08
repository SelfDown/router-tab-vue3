export default {
  inject:["$tabs"],
  data() {
    return {
      // 是否全屏
      fullscreen: false
    }
  },
  watch: {
    // 切换全屏后更新滚动
    async fullscreen() {
      await this.$nextTick()
      this.$refs.tabs.adjust()
    }
  }
}
