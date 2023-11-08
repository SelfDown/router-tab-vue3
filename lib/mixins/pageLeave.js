import { emptyObj } from '../util'

// 路由导航守卫
export const leaveGuard = router => async (to, from, next) => {
  const { $tabs } = router.app

  if (!$tabs) {
    next()
    return
  }

  const fromId = $tabs.getRouteKey(from)
  const toId = $tabs.getRouteKey(to)
  const { $alive } = $tabs
  const fromCache = $alive && $alive.cache[fromId]
  const { alivePath } = ($alive && $alive.cache[toId]) || emptyObj
  const matched = $tabs.matchRoute(to)

  let id, type
  if (alivePath && alivePath !== matched.alivePath) {
    // 页签地址被替换：to 存在缓存但缓存路由不一致
    type = 'replace'
    id = toId
  } else if ($alive.basePath !== matched.basePath) {
    // 离开页签组件：to 不在当前页签组件路由下
    type = 'leave'
    id = $tabs.activeTabId
  } else if (!fromCache && fromId !== toId) {
    // 当前组件未缓存时离开页签
    type = 'leave'
    id = $tabs.activeTabId
  }

  // 判断是否需要页面离开确认
  if ($tabs.pageLeaveFun) {
    // const t = await $tabs.pageLeaveFun()
    let t = false
    try {
      t = await $tabs.pageLeaveFun()
    } catch (e) {
      t = true
    }
    if (t) {
      $tabs.pageLeaveFun = null
      next()
    } else {
      return
    }
  }

  if (type) {
    $tabs
      .leavePage(id, type)
      .then(next)
      .catch(() => next(false))
  } else {
    next()
  }
}

// 页面离开
export default {
  created() {
    const { $router } = this

    if ($router._RouterTabInit) return

    // 初始化路由导航守卫
    // $router.beforeEach(leaveGuard($router))
    // $router._RouterTabInit = true
  },

  methods: {
    // 页面离开 Promise
    async leavePage(id, type) {

      const tab = this.items.find(item => item.id === id) // 当前页签
      // todo 这里alive 获取不到
      if(!this.$alive){
        return
      }
      let { vm } = this.$alive.cache[id] || emptyObj // 缓存数据

      // 未开启缓存时，获取当前页面组件实例
      if (!vm && this.activeTabId === id) {
        try {
          vm = this.$route.matched[this.$alive.routeMatch.routeIndex].instances
            .default
        } catch (_) {
          vm = null
        }
      }

      if (!vm || !tab) return
      // todo 这里找不到$vnode
      console.log(type)
      // const pageLeave = vm.$vnode.componentOptions.Ctor.options.beforePageLeave

      // if (typeof pageLeave === 'function') {
      //   // 页签关闭前
      //   return pageLeave.bind(vm)(tab, type)
      // }
    }
  }
}
