<template>
  <main class="signin" />
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const message = useMessage()

onMounted(async () => {
  await router.isReady()
  let code = location.href.split('/')[4].split('=')[1]
  code = code.replace('#', '')
  const [res, getTokenErr] = await store.dispatch('getDCAccessToken', { code })
  if (getTokenErr) return message.error(getTokenErr.message)
  console.log(res)
  store.commit('SET_LOGGEDIN', true)
})
</script>

<style scoped lang="postcss">

</style>
