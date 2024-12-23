<template>
    <div flex="~ col auto">
        <div flex="~ items-center justify-center" pt-12px>
            <div
                class="list-item" :class="step === 1 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-m1440="w-200px"
                @click="handleChange(1)"
            >
                <div class="i-carbon-ibm-elo-engineering-insights" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>选择调优类型</div>
                </div>
            </div>
            <div class="list-item-arrow" w-96px h-96px></div>
            <div
                class="list-item" :class="step === 2 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-m1440="w-200px"
                @click="handleChange(2)"
            >
                <div class="i-carbon-ibm-knowledge-catalog" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>创建任务</div>
                </div>
            </div>
            <div class="list-item-arrow" w-96px h-96px></div>
            <div
                class="list-item" :class="step === 3 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-m1440="w-200px"
                @click="handleChange(3)"
            >
                <div class="i-carbon-ibm-lpa" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>查看报告</div>
                </div>
            </div>
        </div>
        <div class="migrate-wrap" flex="auto">
            <template v-if="step === 1">
                <el-scrollbar tag="div" wrap-class="scroll-wrap" view-class="scroll-view" style="height: 100%;">
                    <p class="migrate-title" pt-5px text="40px center" lh-56px>从零开发鲲鹏应用</p>
                    <div flex="~ justify-center wrap" gap-24px mt-32px mx-12px>
                        <div flex="basis-32%">
                            <div
                                class="card-item" :class="currId === 1 ? 'card-item-3' : ''"
                                h-full b-rd-8px py-12px px-32px
                                @click="currId = 1"
                            >
                                <div class="i-carbon-ai-generate" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>AI调优</p>
                                <p mt-8px text="14px" lh-22px relative z-3>
                                    使用自研高性能AI调优方案，通过用户自主选择测试用例，对数据库和大数据场景进行自动优化，自动调优后给予最优参数配置，提供复杂场景下参数配置的优化建议。
                                </p>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div
                                class="card-item" :class="currId === 2 ? 'card-item-3' : ''"
                                h-full b-rd-8px py-12px px-32px
                                @click="currId = 2"
                            >
                                <div class="i-carbon-function" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>热点函数分析</p>
                                <p mt-8px text="14px" lh-22px relative z-3>支持分析C/C++程序代码识别性能瓶颈，给出对应的Top10热点函数和调用栈详情。通过火焰图展示函数的调用关系，发现优化路径。</p>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div
                                class="card-item" :class="currId === 3 ? 'card-item-3' : ''"
                                h-full b-rd-8px py-12px px-32px
                                @click="currId = 3"
                            >
                                <div class="i-carbon-app-connectivity" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>HPC应用分析</p>
                                <p mt-8px text="14px" lh-22px relative z-3>通过采集系统的PMU事件，获取面向OpenMP和MPI应用的关键指标，以及内存带宽、指令分布、微架构指标等信息。</p>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div
                                class="card-item" :class="currId === 4 ? 'card-item-3' : ''"
                                h-full b-rd-8px py-12px px-32px
                                @click="currId = 4"
                            >
                                <div class="i-carbon-ibm-watson-tone-analyzer" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>Java性能分析</p>
                                <p mt-8px text="14px" lh-22px relative z-3>基于鲲鹏服务器上运行的Java程序的性能分析和优化工具，能图形化显示Java程序的堆、线程、锁、垃圾回收等信息，收集热点函数、定位程序瓶颈点，帮助用户采取针对性优化。</p>
                            </div>
                        </div>
                        <div flex="basis-32%">
                            <div
                                class="card-item"
                                h-full b-rd-8px py-12px px-32px
                            >
                                <div class="i-carbon-cics-system-group" w-64px h-64px relative z-3></div>
                                <p mt-24px text="18px" lh-26px relative z-3>系统诊断</p>
                                <p mt-8px text="14px" lh-22px relative z-3>系统诊断是针对基于鲲鹏的服务器的性能分析工具，通过分析系统运行指标，识别异常点，并给出优化建议，帮助用户识别出源代码中内存使用的问题点，提升程序的可靠性。</p>
                                <div pos-absolute right-4px top-4px bg-hex-24242466 b="1px solid hex-24242466 rd-40px" p="y-2px x-12px">敬请期待</div>
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
            <div v-else flex="~ justify-center" w-full h-full pb-24px>
                <video :src="currVideoUrl" controls autoplay muted max-w-full max-h-full @ended="onVideoEnded"></video>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ManiBox',
})

const step = ref(1)
const currId = ref(1)

function handleChange(val: number) {
    step.value = val
}

const videoUrl = ref<string[][]>([
    [''],
    [
        'https://www.hikunpeng.com/_static3/Aitask.CNwV8kmo.mp4',
        'https://www.hikunpeng.com/_static3/Aireport.B1ZUteUT.mp4',
    ],
    [
        'https://www.hikunpeng.com/_static3/hottask.DVrOcOOy.mp4',
        'https://www.hikunpeng.com/_static3/hotreport.D8n2yhid.mp4',
    ],
    [
        'https://www.hikunpeng.com/_static3/HPCtask.C641-c28.mp4',
        'https://www.hikunpeng.com/_static3/HPCreport.CCTGCNIv.mp4',
    ],
    [
        'https://www.hikunpeng.com/_static3/Javatask.Q6YC95UQ.mp4',
        'https://www.hikunpeng.com/_static3/Javareport.DsrEDCwq.mp4',
    ],
    ['', ''],
])

const currVideoUrl = computed(() => {
    return videoUrl.value[currId.value][step.value - 2]
})

function handleStart() {
    step.value = 2
}

function onVideoEnded() {
    if (step.value === 2)
        step.value = 3
}
</script>
