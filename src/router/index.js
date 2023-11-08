import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import { RouterTabRoutes } from "vue-router-tab";
import frameRoutes from './frames'
import route404 from './404'
// 全局 404 路由
const globalRoute404 = {
    ...route404,
    path: '/404'
}

const routes = [
    {
        path: '/',
        redirect: '/default/page/1'
    },

    // 框架子路由
    ...frameRoutes,

    // 根路由 404
    globalRoute404,

    // 未匹配的路由 404
    {
        path: '/:pathMatch(.*)*',
        redirect(to) {
            const match = /^(\/[^/]+\/)/.exec(to.path)

            if (match) {
                const base = match[1]
                const matchParent = $router.options.routes.find(
                    item => item.path === base
                )

                // 子路由 404
                if (matchParent) return base + '404'
            }

            // 根路由 404
            return '/404'
        }
    }
];

const $router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default $router;