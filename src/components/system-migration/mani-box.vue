<template>
    <div flex="~ col auto">
        <div flex="~ items-center justify-center" pt-12px>
            <div
                class="list-item" :class="step === 1 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-xl="w-200px"
                @click="handleChange(1)"
            >
                <div class="i-carbon-document-add" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>新建迁移</div>
                    <div text-12px lh-18px>系统迁移工具</div>
                </div>
            </div>
            <div class="list-item-arrow" w-96px h-96px></div>
            <div
                class="list-item" :class="step === 2 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-xl="w-200px"
                @click="handleChange(2)"
            >
                <div class="i-carbon-migrate" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>迁移实施</div>
                    <div text-12px lh-18px>系统迁移工具</div>
                </div>
            </div>
            <div class="list-item-arrow" w-96px h-96px></div>
            <div
                class="list-item" :class="step === 3 ? 'active' : ''"
                flex="~ items-center" w-280px h-64px p="x-40px t-8px b-12px" border-rd-4px lt-xl="w-200px"
                @click="handleChange(3)"
            >
                <div class="i-carbon-ibm-knowledge-catalog-standard" w-32px h-32px></div>
                <div ml-16px>
                    <div text-16px lh-24px>迁移结果</div>
                    <div text-12px lh-18px>系统迁移工具</div>
                </div>
            </div>
        </div>
        <div class="migrate-wrap" flex="auto">
            <template v-if="step === 1 && !showVideo">
                <el-scrollbar tag="div" wrap-class="scroll-wrap" view-class="scroll-view" style="height: 100%;">
                    <p class="migrate-title" pt-60px text="40px center" lh-56px>自动迁移到鲲鹏系统</p>
                    <div flex="~ items-center justify-center" mt-64px>
                        <div h-320px b-rd-8px flex="~ basis-35% col items-center justify-center" class="card-item">
                            <img w-96px h-96px src="https://www.hikunpeng.com/_static3/x86.Cr4BV03e.png" class="card-icon" alt="">
                            <p mt-36px text="32px" lh-44px class="card-title">x86系统</p>
                        </div>
                        <div class="card-item-arrow" w-114px h-114px></div>
                        <div h-320px b-rd-8px flex="~ basis-35% col items-center justify-center" class="card-item card-item-2">
                            <img w-96px h-96px src="https://www.hikunpeng.com/_static3/kunpeng.BYd449cV.png" class="card-icon" alt="">
                            <p mt-36px text="32px" lh-44px class="card-title">鲲鹏系统</p>
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
            <div v-else flex="~ justify-center" w-full h-full pb-24px>
                <video :src="videoUrl[step]" controls autoplay muted max-w-full max-h-full @ended="onVideoEnded"></video>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'SystemMigrationManiBox',
})

const step = ref(1)
const showVideo = ref(false)

function handleChange(val: number) {
    if (val === 1)
        showVideo.value = false
    else
        showVideo.value = true
    step.value = val
}

function handleStart() {
    step.value = 1
    showVideo.value = true
}

const videoUrl = ref<string[]>([
    '',
    'https://public-download.obs.cn-east-2.myhuaweicloud.com/kcs_devkit/1%E5%88%9B%E5%BB%BA%E5%B7%A5%E7%A8%8B.mp4',
    'https://public-download.obs.cn-east-2.myhuaweicloud.com/kcs_devkit/2%E8%BF%81%E7%A7%BB%E5%AE%9E%E6%96%BD.mp4',
    'https://public-download.obs.cn-east-2.myhuaweicloud.com/kcs_devkit/3%E8%BF%81%E7%A7%BB%E7%BB%93%E6%9E%9C.mp4',
])

function onVideoEnded() {
    if (step.value <= 2)
        handleChange(step.value + 1)
}
</script>
