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
        :disabled="!type"
        @click="Join"
      >
        {{ type === 'permanent' ?'前往認證' :'加入伺服器' }}
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { NAlert, NIcon, NButton } from 'naive-ui'
import { Time, Home } from '@vicons/carbon'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from '@vue/runtime-core'
import anime from 'animejs'
import { TemporaryJoin, PermanentJoin } from '@/api/joinType'
import { useStore } from 'vuex'

const router = useRouter()
const type = ref('')
const store = useStore()
const userID = computed(() => store.state.auth.user.id)

const permanentJoin = async () => {
  const [res, err] = await PermanentJoin({
    memberID: userID.value,
  })
}

const temporaryJoin = async () => {
  const [res, err] = await TemporaryJoin({
    memberID: userID.value,
  })
}

const Join = async () => {
  if (type.value === 'temporary') {
    await temporaryJoin()
    alert('TODO 加入伺服器')
    return
  }

  if (type.value === 'permanent') {
    await permanentJoin()
    return router.push({ name: 'EntryCheck' })
  }
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
