<h2 align="center">Vue Router Tab</h2>
改造成vue3 版本
Vue Router Tab 是基于 Vue Router 的路由页签组件，用来实现多页签页面的管理。

## 📌 功能

✅ 响应路由变化来打开或切换页签

✅ 页签过多鼠标滚轮滚动

✅ 页签拖拽排序

✅ 支持页签打开、切换、关闭、刷新、重置等[操作](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/operate.html)

✅ [Iframe 页签](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/iframe.html)嵌入外部网站

✅ 组件个性化设置：[过渡效果](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/transition.html)、[自定义插槽](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/slot.html)、[页签右键菜单](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/contextmenu.html)

✅ [多语言支持](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/i18n.html)

✅ 页签切换后[保留滚动位置](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/scroll.html)

✅ [缓存控制](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/cache.html)：页签规则、页签是否缓存、最大缓存数、是否复用组件等

✅ [动态页签信息](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/dynamic-tab-info.html)：标题、图标、提示

✅ [初始页签数据](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/initial-tabs.html)，进入页面时默认显示的页签

✅ [页签刷新还原](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/restore.html)，在浏览器刷新后恢复页签

✅ [页面离开前确认](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/page-leave.html)

## 🔗 链接

### [📝 文档](https://bhuh12.gitee.io/vue-router-tab/zh/)

- [介绍](https://bhuh12.gitee.io/vue-router-tab/zh/guide/)

- [入门](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/)

- [API](https://bhuh12.gitee.io/vue-router-tab/zh/api/)
## 🏷 NPM 任务

| 任务               | 命令                    | 备注                                                  |
| ------------------ | ----------------------- | ----------------------------------------------------- |
| 插件构建           | `npm lib:build`        |
| 插件构建并生成报告 | `npm lib:build:report` |
| 插件发布           | `npm lib:publish`      | 操作前更改 `package.json` 中的 `version` 为新的版本号 |
| Demo 开发          | `npm demo:dev`         |
| Demo 构建          | `npm demo:build`       |
| 文档开发           | `npm docs:dev`         |
| 文档构建           | `npm docs:build`       |
| 代码风格检查并修复 | `npm lint`             |
| 代码提交           | `npm commit`           |

