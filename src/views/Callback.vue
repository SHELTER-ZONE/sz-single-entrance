<template>
  <main class="signin" />
</template>

<script setup>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const route = useRoute()
const loggedin = computed(() => store.state.auth.loggedin)

onMounted(async () => {
  if (loggedin.value) return router.replace({ name: 'Home' })
  await router.isReady()
  const code = route.query.code
  console.log(code)
  const [getTokenErr] = await store.dispatch('getDCAccessToken', { code })
  if (getTokenErr) return console.error(getTokenErr)
  store.commit('auth/setLoggedin', true)
})
</script>

<style scoped lang="postcss">

</style>
