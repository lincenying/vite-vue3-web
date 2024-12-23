<template>
    <div flex="~ col auto">
        <div flex="~ items-center justify-center" pt-12px>
            <div
                class="list-item" :class="step === 1 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-m1440="w-200px"
                @click="handleChange(1)"
            >
                <div class="i-carbon-ibm-sap-on-power" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>应用迁移</div>
                    <div text-12px lh-18px>应用迁移工具</div>
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
                <div class="i-carbon-ibm-data-product-exchange" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>调优</div>
                    <div text-12px lh-18px>性能分析工具</div>
                </div>
            </div>
        </div>
        <div class="migrate-wrap" flex="auto">
            <template v-if="step === 1 && !showVideo">
                <el-scrollbar tag="div" wrap-class="scroll-wrap" view-class="scroll-view" style="height: 100%;">
                    <p class="migrate-title" pt-60px text="40px center" lh-56px>一键迁移到鲲鹏应用</p>
                    <div flex="~ items-center justify-center" mt-64px>
                        <div h-320px b-rd-8px flex="~ basis-35% col items-center justify-center" class="card-item">
                            <img w-96px h-96px src="https://www.hikunpeng.com/_static3/x86.Cr4BV03e.png" class="card-icon" alt="">
                            <p mt-36px text="32px" lh-44px class="card-title">x86工程</p>
                        </div>
                        <div class="card-item-arrow" w-114px h-114px></div>
                        <div h-320px b-rd-8px flex="~ basis-35% col items-center justify-center" class="card-item card-item-2">
                            <img w-96px h-96px src="https://www.hikunpeng.com/_static3/kunpeng.BYd449cV.png" class="card-icon" alt="">
                            <p mt-36px text="32px" lh-44px class="card-title">鲲鹏应用</p>
                        </div>
                    </div>
                    <div mt-72px mb-24px flex="~ items-center justify-center">
                        <div class="o-btn-wrap" w-252px h-68px bg-hex-258bc95c b-rd-34px flex="~ items-center justify-center">
                            <button
                                class="o-btn" type="button"
                                w-240px h-54px px-15px b-rd-28px text="20px" b="1px solid hex-07f3"
                                @click="handleStart"
                            >
                                开始迁移
                            </button>
                        </div>
                    </div>
                </el-scrollbar>
            </template>
            <div v-else-if="step === 3" flex="~ justify-center" w-full h-full pb-24px>
                <template v-if="step3ShowGif">
                    <div max-w-full max-h-full relative>
                        <img max-w-full max-h-full src="https://www.hikunpeng.com/_static3/tiaoyou.D5rR_dqn.gif" alt="">
                    </div>
                </template>
                <div v-else max-w-full max-h-full relative>
                    <img max-w-full max-h-full src="https://www.hikunpeng.com/_static3/hpc-bottom.CQsoNuJ5.png" alt="">
                    <div pos-absolute top="13.89%" left-0 w-full style="height: calc(100% - 13.89% - 20px)">
                        <el-scrollbar tag="div" wrap-class="scroll-wrap" view-class="scroll-view" style="height: 100%;">
                            <img max-w-full max-h-full src="https://www.hikunpeng.com/_static3/hpc-scroll.Cv8ZT_3r.png">
                        </el-scrollbar>
                    </div>
                </div>
                <!-- <div class="tip">分析完成后，进入分析报告滚动查看丰富的分析内容</div> -->
            </div>
            <div v-else flex="~ justify-center" w-full h-full pb-24px>
                <video :src="videoUrl[step]" controls autoplay muted max-w-full max-h-full @ended="onVideoEnded"></video>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ApplicationMigrationManiBox',
})

const step = ref(1)
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
    step.value = 1
    showVideo.value = true
}

const videoUrl = ref<string[]>([
    '',
    'https://www.hikunpeng.com/_static3/yingyongqianyi.BKRNEFG2.mp4',
    'https://www.hikunpeng.com/_static3/hpctiaoshi.CB9vh-S8.mp4',
    '',
])

function onVideoEnded() {
    if (step.value <= 2)
        handleChange(step.value + 1)
}
</script>
