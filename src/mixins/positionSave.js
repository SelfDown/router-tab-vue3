export default {
    data() {
        return {
            pageScroller: null,
            pageScrollPosition: null,
        }
    },
    props:{
        pageClass: {
            type: [Array, Object, String],
            default: 'router-alive-page'
        },
    },
    deactivated: function () {
        this.saveScrollPosition()
    },
    activated: function () {
        this.restoreScrollPosition()
    },
    methods: {
        // 获取滚动元素
        getScroller(selector) {
            return selector.startsWith('$')
                ? document.querySelector(selector.replace(/^\$/, ''))
                : this.$el.querySelector(selector)
        },
        // 还原滚动位置
        restoreScrollPosition() {
            // const pageVm = this.$refs.page
            const position = this.pageScrollPosition

            if (!position) return
            this.$nextTick(()=>{
                Object.entries(position).forEach(([selector, pos]) => {
                    const el = this.getScroller(selector)
                    if (el) {
                        el.scrollLeft = pos.left
                        el.scrollTop = pos.top
                    }
                })
            })

        },
        // 保存滚动位置
        saveScrollPosition() {

            let pageScroller = this.pageScroller
            if (typeof pageScroller === 'string' && pageScroller.length) {
                pageScroller = pageScroller.split(/\s?,\s?/)
            }

            if (!Array.isArray(pageScroller)) {
                pageScroller = []
            }

            // 默认保存页面根节点位置
            pageScroller.push('.' + this.pageClass)

            // 添加全局的滚动元素配置
            // 组件外部选择器使用 $ 前缀区分
            if (this.pageScroller) {
                pageScroller.push('$' + this.pageScroller)
            }

            // 记录位置
            const position = pageScroller.reduce((pos, selector) => {
                try{
                    const el = this.getScroller(selector)
                    if (el) {
                        pos[selector] = {
                            left: el.scrollLeft,
                            top: el.scrollTop
                        }
                    }
                    // eslint-disable-next-line no-empty
                }catch (e){

                }


                return pos
            }, {})

            this.pageScrollPosition = position
        },
    }
}