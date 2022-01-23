<template>
  <div id="important" class="page-padding">
    <div class="alert-wrapper common-width">
      <n-alert v-for="alert in 3" :key="alert" class="alert-block" title="嚴重警告 - 不要使用私訊問問題!!" type="error">
        <p>
          加進伺服器不就是為了問問題嗎，為什麼進來後又要用私訊?
        </p>
        <p>真的很煩，拜託，伺服器裡就有各類的問題詢問區了</p>
      </n-alert>
    </div>

    <h2>很重要，所以說三次 !</h2>

    <CooldownButton v-if="loaded" seconds="10" btnText="理解 !" @next="next" />
  </div>
</template>

<script setup>
import { NAlert } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import CooldownButton from '@/components/CooldownButton.vue'
import { onMounted, ref } from '@vue/runtime-core'
import anime from 'animejs'

const store = useStore()
const router = useRouter()
const loaded = ref(false)

const next = () => {
  store.commit('SET_PAGE_READED', 'important')
  router.push({ name: 'Rules' })
}

onMounted(() => {
  anime({
    targets: '.alert-block',
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(150, { start: 300 }),
  })

  setTimeout(() => {
    loaded.value = true
  }, 1000)
})
</script>

<style lang="postcss" scoped>
.alert-wrapper {
  @apply grid gap-[20px];
}

h2 {
  @apply text-lg pt-[30px];
}
</style>
