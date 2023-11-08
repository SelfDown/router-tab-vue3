<script>
import ScrollPosition from './ScrollPosition.vue'

export default {
  name: 'ScrollMulti',

  extends: ScrollPosition,
  data() {
    return {
      pageScroller: ['.custom-scroller', '.custom-scroller-1'],
      multi: true
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-scroller,
.custom-scroller-1 {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #d7d7d7;
}
</style>

