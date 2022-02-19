<template>
  <n-modal v-model:show="showModal" class="mx-[15px] max-w-[500px] m-auto" preset="card" :on-update:show="updateShowModal">
    <div class=" h-[500px] overflow-y-scroll pr-[20px] pl-[1px] py-[1px]">
      <n-steps vertical :current="current" :status="currentStatus">
        <n-step title="生成驗證指令碼">
          <img :src="getCode">
        </n-step>
        <n-step title="複製驗證指令碼">
          <img :src="copyCode">
        </n-step>
        <n-step title="加入伺服器">
          <img :src="joinServer">
        </n-step>
        <n-step title="輸入驗證指令">
          <p class="mb-[10px]">請至伺服器的 💾terminal指令區 貼上剛剛複製的驗證指令並送出即可</p>
          <div class="grid gap-[20px]">
            <img :src="terminalChannel">
            <img :src="codeInput">
          </div>
        </n-step>
      </n-steps>
    </div>
  </n-modal>
</template>

<script setup>
import getCode from '@/assets/get-code.png'
import copyCode from '@/assets/copy-code.png'
import joinServer from '@/assets/join-server.png'
import terminalChannel from '@/assets/terminal-channel.png'
import codeInput from '@/assets/code-input.png'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { NModal, NSteps, NStep } from 'naive-ui'

const emit = defineEmits(['close'])
const showModal = ref(false)

const updateShowModal = (val) => {
  showModal.value = val
  if (!val) {
    setTimeout(() => {
      emit('close')
    }, 300)
  }
}

onMounted(() => {
  showModal.value = true
})
</script>

<style lang="postcss" >
.n-modal-scroll-content {
  @apply items-center justify-center w-full;
}
</style>
