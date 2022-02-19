<template>
  <div id="links" class="common-width page-padding">
    在你進入SZ之前，想讓你知道一些有用的連結
    <n-card title="提問模板">
      在你發問前，我們建議你使用提問模板，能協助你讓大家比較準確的知道你遇到的問題
      <a class="text-[#63e2b7]" href="https://shelter-zone.github.io/Question-Template/#/" target="_blank" rel="noopener noreferrer">
        <n-button block type="primary" class="mt-[20px]">
          開啟連結
        </n-button>
      </a>
    </n-card>
    <n-card title="技術交流指南">
      <p>不敢問問題?怕問問題會被大佬噴?</p>
      <p>請先看看技術交流指南</p>
      <a class="text-[#63e2b7]" href="https://shelter-zone.github.io/Technological-Exchange-Guide/Coding/dont_todo.html" target="_blank" rel="noopener noreferrer">
        <n-button block type="primary" class="mt-[20px]">
          開啟連結
        </n-button>
      </a>
    </n-card>
    <div>
      <CooldownButton :seconds="0" btnText="下一步" @next="nextPage" />
    </div>
  </div>
</template>

<script setup>
import { NCard, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'
import CooldownButton from '../components/CooldownButton.vue'

const router = useRouter()

const nextPage = () => {
  router.push({ name: 'Join' })
}
</script>

<style lang="postcss" scoped>
:deep(.n-card) {
  @apply bg-gray-700;
}

#links {
  @apply grid gap-[30px];
}
</style>
