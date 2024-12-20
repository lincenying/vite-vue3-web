export default defineComponent({
    name: 'GlobalHeader',
    props: {
        page: {
            type: String,
            default: '',
        },
        // item: {
        //     type: Object as PropType<AbdTop5>,
        //     default: () => ({}),
        // },
    },
    setup(props) {
        // 父子组件通讯 ===>
        const { page } = $(toRefs(props))
        console.log(page)
        // 父子组件通讯 <===
        return () => (
            <div
                class="global-header" h="80px!" flex="~ none items-center" bg-hex-fff
                pl-64px
            >
                <img src="https://www.tiankuan.net/img/describtion/logo.png" class="w-66px h-64px" alt="" />
            </div>
        )
    },
})
