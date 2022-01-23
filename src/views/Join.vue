<template>
  <div id="join" class="page-padding">
    <div class="join-type-wrapper common-width">
      <n-alert title="暫時停留" class="join-type">
        <template #icon>
          <n-icon><Time /></n-icon>
        </template>
        <div>
          只是想詢問一些問題，並無在伺服器長久居住的打算
        </div>
      </n-alert>

      <n-alert title="長久居留" class="join-type">
        <template #icon>
          <n-icon><Home /></n-icon>
        </template>

        <div>
          打算在伺服器長久居住的打算
        </div>
      </n-alert>
    </div>
  </div>
</template>

<script setup>
import { NAlert, NIcon } from 'naive-ui'
import { Time, Home } from '@vicons/carbon'
import { useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import anime from 'animejs'

const router = useRouter()

const join = (type) => {
  console.log(type)
  router.replace({ name: 'Welcome' })
}

onMounted(() => {
  anime({
    targets: '.join-type',
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(150, { start: 300 }),
  })
})
</script>

<style lang="postcss" scoped>
.join-type-wrapper {
  @apply grid gap-[20px];
}
.join-type {
  @apply cursor-pointer !hover:(bg-emerald-300);
}

.join-type:hover :deep(.n-alert-body__title) {
  @apply !text-gray-600;
}
.join-type:hover :deep(.n-alert-body__content) {
  @apply !text-gray-600;
}
.join-type:hover :deep(.n-alert__icon) {
  @apply !text-gray-600;
}

</style>
