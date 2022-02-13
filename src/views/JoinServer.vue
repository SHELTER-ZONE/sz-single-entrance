<template>
  <div id="join" class="page-padding">
    <div class="join-type-wrapper common-width">
      <n-alert
        title="暫時停留"
        class="join-type"
        :class="{ selected: type === 'temporary' }"
        @click="type = 'temporary'"
      >
        <template #icon>
          <n-icon><Time /></n-icon>
        </template>
        <div>只是想詢問一些問題，並無在伺服器長久居住的打算</div>
      </n-alert>

      <n-alert
        title="長久居留"
        class="join-type"
        :class="{ selected: type === 'permanent' }"
        @click="type = 'permanent'"
      >
        <template #icon>
          <n-icon><Home /></n-icon>
        </template>

        <div>打算在伺服器長久居住的打算</div>
      </n-alert>
    </div>

    <div class="mt-[40px]">
      <n-button
        class="join-btn"
        secondary
        round
        type="primary"
        :loading="loading"
        :disabled="!type"
        @click="Join"
      >
        {{ type === 'permanent' ?'前往認證' :'加入伺服器' }}
      </n-button>
    </div>
    <span class="text-sm">{{ hint }}</span>
  </div>
</template>

<script setup>
import { NAlert, NIcon, NButton, useMessage } from 'naive-ui'
import { Time, Home } from '@vicons/carbon'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from '@vue/runtime-core'
import anime from 'animejs'
import { GetMemberJoinType, TemporaryJoin, PermanentJoin } from '@/api/joinType'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const message = useMessage()
const type = ref('')
const hint = ref('')
const loading = ref(false)
const userID = computed(() => store.state.auth.user.id)

const getMemberJoinType = async () => {
  const [type, err] = await GetMemberJoinType(userID.value)
  if (err) return err
  return type
}

const permanentJoin = async () => {
  const [res, err] = await PermanentJoin({
    memberID: userID.value,
  })
  if (err) {
    message.error(err)
    return false
  }
  return true
}

const temporaryJoin = async () => {
  const [res, err] = await TemporaryJoin({
    memberID: userID.value,
    // memberID: undefined,
  })
  if (err) {
    message.error(err)
    return false
  }
  return true
}

const reset = () => {
  loading.value = false
  hint.value = ''
}

const Join = async () => {
  // 檢查是否已在伺服器中
  loading.value = true
  hint.value = '登記資料中...'
  // await getMemberJoinType()

  if (type.value === 'temporary') {
    if (!await temporaryJoin()) return reset()
    window.location.href = 'https://discord.gg/D3MQjxzTgg'
    reset()
    return
  }

  if (type.value === 'permanent') {
    if (!await permanentJoin()) return reset()
    reset()
    return router.push({ name: 'EntryCheck' })
  }
}

onMounted(() => {
  if (!userID.value) return router.replace({ name: 'Home' })
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
.join-btn {
  @apply mt-[30px] text-md px-[20px] py-[20px];
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

.selected {
  @apply bg-emerald-300;
}

.selected :deep(.n-alert-body__title) {
  @apply !text-gray-600;
}
.selected :deep(.n-alert-body__content) {
  @apply !text-gray-600;
}
.selected :deep(.n-alert__icon) {
  @apply !text-gray-600;
}
</style>
