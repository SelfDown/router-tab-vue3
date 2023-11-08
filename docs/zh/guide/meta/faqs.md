# 常见问题

### 📣 RouterTab 不支持多层嵌套路由生成页签 ([issues 32](https://github.com/bhuh12/vue-router-tab/issues/32))

RouterTab 控件是有意设计成这样的，只有包含 RouterTab 组件的路由的**直接子路由**才参与生成页签页面，再嵌套的下级路由跟 Vue Router 中一样展现。

试想一下，一个页签页面内部还有**子页签**控制页面展示，并且子页签也需要响应路由，这种场景是必须嵌套路由支持的。

所有的页签路由都直接放在同一层会很杂乱，我们可以使用 `...` 展开运算符，将不同模块的路由配置合并引入：

```javascript
// RouterTab 内置路由
import { RouterTabRoutes } from 'vue-router-tab'

const news = [{...}]
const product = [{...}]

const routes = [
  {
    path: '/',
    component: Frame,
    children: [
      ...RouterTabRoutes,
      ...news,
      ...product,
    ]
  }
]
```
