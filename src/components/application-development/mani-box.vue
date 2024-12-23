<template>
    <div flex="~ col auto">
        <div flex="~ items-center justify-center" pt-12px>
            <div
                class="list-item" :class="step === 1 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-m1440="w-200px"
                @click="handleChange(1)"
            >
                <div class="i-carbon-development" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>应用开发</div>
                    <div text-12px lh-18px>应用开发工具</div>
                </div>
            </div>
            <div class="list-item-arrow" w-96px h-96px></div>
            <div
                class="list-item" :class="step === 2 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-m1440="w-200px"
                @click="handleChange(2)"
            >
                <div class="i-carbon-debug" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>调试</div>
                    <div text-12px lh-18px>编译调试工具</div>
                </div>
            </div>
            <div class="list-item-arrow" w-96px h-96px></div>
            <div
                class="list-item" :class="step === 3 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-m1440="w-200px"
                @click="handleChange(3)"
            >
                <div class="i-carbon-meter" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>调优</div>
                    <div text-12px lh-18px>性能分析工具</div>
                </div>
            </div>
        </div>
        <div class="migrate-wrap" flex="auto">
            <template v-if="step === 1 && !showVideo">
                <el-scrollbar tag="div" wrap-class="scroll-wrap" view-class="scroll-view" style="height: 100%;">
                    <p class="migrate-title" pt-5px text="40px center" lh-56px>从零开发鲲鹏应用</p>
                    <div flex="~ justify-center wrap" gap-24px mt-32px mx-12px>
                        <div flex="basis-32%">
                            <div h-full b-rd-8px py-12px px-32px class="card-item" :class="tmpCurrId === 1 ? 'card-item-3' : ''">
                                <div class="i-carbon-border-full" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>空工程</p>
                                <p mt-8px text="14px" lh-22px relative z-3>自动化创建鲲鹏空工程。</p>
                                <div pos-absolute right-4px top-4px bg-hex-24242466 b="1px solid hex-24242466 rd-40px" p="y-2px x-12px">敬请期待</div>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div h-full b-rd-8px py-12px px-32px class="card-item" :class="tmpCurrId === 2 ? 'card-item-3' : ''" @click="tmpCurrId = 2">
                                <div class="i-carbon-border-full" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>通用计算应用</p>
                                <p mt-8px text="14px" lh-22px relative z-3>通用计算应用工程能支持基础应用开发，包含鲲鹏硬件加速应用、鲲鹏加速库应用以及鲲鹏同构加速框架应用。</p>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div h-full b-rd-8px py-12px px-32px class="card-item" :class="tmpCurrId === 3 ? 'card-item-3' : ''">
                                <div class="i-carbon-ibm-gcm" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>安全计算应用</p>
                                <p mt-8px text="14px" lh-22px relative z-3>安全计算应用运行在REE和TEE侧，提供CA、TA等多种安全计算工程，其包含源码以及丰富的Demo文件样例。</p>
                                <div pos-absolute right-4px top-4px bg-hex-24242466 b="1px solid hex-24242466 rd-40px" p="y-2px x-12px">敬请期待</div>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div h-full b-rd-8px py-12px px-32px class="card-item" :class="tmpCurrId === 4 ? 'card-item-3' : ''">
                                <div class="i-carbon-ibm-cloud-pak-security" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>高性能计算应用</p>
                                <p mt-8px text="14px" lh-22px relative z-3>基于高性能通信库和数学库创建高性能计算应用，处理大规模并行运算任务，实现强大的计算功能。</p>
                                <div pos-absolute right-4px top-4px bg-hex-24242466 b="1px solid hex-24242466 rd-40px" p="y-2px x-12px">敬请期待</div>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div h-full b-rd-8px py-12px px-32px class="card-item" :class="tmpCurrId === 5 ? 'card-item-3' : ''">
                                <div class="i-carbon-ibm-cloud-pak-applications" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>DPAK应用</p>
                                <p mt-8px text="14px" lh-22px relative z-3>鲲鹏DPAK提供面向SmartNIC场景的业务卸载开发能力，支持网络卸载、虚拟化卸载等场景。</p>
                                <div
                                    pos-absolute right-4px top-4px
                                    bg-hex-24242466 b="1px solid hex-24242466 rd-40px"
                                    p="y-2px x-12px"
                                >
                                    敬请期待
                                </div>
                            </div>
                        </div>
                    </div>
                    <div mt-72px mb-24px flex="~ items-center justify-center">
                        <div class="o-btn-wrap" w-252px h-68px bg-hex-258bc95c b-rd-34px flex="~ items-center justify-center">
                            <button
                                class="o-btn" type="button"
                                w-240px h-54px px-15px b-rd-28px text="20px" b="1px solid hex-07f3"
                                @click="handleStart"
                            >
                                开始
                            </button>
                        </div>
                    </div>
                </el-scrollbar>
            </template>
            <div v-else-if="step === 3" flex="~ justify-center" w-full h-full pb-24px>
                <template v-if="step3ShowGif">
                    <div max-w-full max-h-full relative>
                        <img max-w-full max-h-full :src="currImgUrl[0]" alt="">
                    </div>
                </template>
                <div v-else max-w-full max-h-full relative>
                    <img max-w-full max-h-full :src="currImgUrl[1]" alt="">
                    <div
                        pos-absolute top="13.89%" left-0
                        w-full h="[calc(100%-13.89%-20px)]"
                    >
                        <el-scrollbar tag="div" wrap-class="scroll-wrap" view-class="scroll-view" style="height: 100%;">
                            <img max-w-full max-h-full :src="currImgUrl[2]">
                        </el-scrollbar>
                    </div>
                    <div
                        class="tip"
                        absolute top-0 left="[calc(50%-183px)]" z-9
                        inline-block w-367px h-101px px-50px py-26px text-16px lh-24px
                        bg="[50%] no-repeat cover"
                    >
                        分析完成后，进入分析报告滚动查看丰富的分析内容
                    </div>
                </div>
            </div>
            <div v-else flex="~ justify-center" w-full h-full pb-24px>
                <video :src="currVideoUrl" controls autoplay muted max-w-full max-h-full @ended="onVideoEnded"></video>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ApplicationDevelopmentManiBox',
})

const step = ref(1)
const tmpCurrId = ref(2)
const currId = ref(2)
const showVideo = ref(false)
const step3ShowGif = ref(false)

function handleChange(val: number) {
    if (val === 1)
        showVideo.value = false
    else
        showVideo.value = true
    if (val === 3) {
        step3ShowGif.value = true
        setTimeout(() => {
            step3ShowGif.value = false
        }, 2000)
    }
    else {
        step3ShowGif.value = false
    }
    step.value = val
}

function handleStart() {
    showVideo.value = true
}

const videoUrl = ref<string[][]>([
    ['', '', ''],
    ['', '', ''],
    [
        'https://www.hikunpeng.com/_static3/gongchengmoban.DtBcBoMH.mp4',
        'https://www.hikunpeng.com/_static3/tongyongtiaoshi.DXuTLUJt.mp4',
    ],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
])

const imgUrl = ref<string[][]>([
    ['', '', ''],
    ['', '', ''],
    [
        'https://www.hikunpeng.com/_static3/tiaoyou01.Dj4qKV0k.gif',
        'https://www.hikunpeng.com/_static3/native-bottom.wpiC2srn.png',
        'https://www.hikunpeng.com/_static3/native-scroll.URvTSL9F.png',
    ],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
])

const currVideoUrl = computed(() => {
    return videoUrl.value[currId.value][step.value - 1]
})
const currImgUrl = computed(() => {
    return imgUrl.value[currId.value]
})

function onVideoEnded() {
    handleChange(step.value + 1)
}
</script>
