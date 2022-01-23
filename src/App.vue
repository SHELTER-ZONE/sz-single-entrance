<template>
  <n-config-provider :theme="darkTheme" class="w-full h-full overflow-y-auto">
    <h1 class="static-title">SHELTER ZONE</h1>
    <h3 class="page-title">{{ pageTitle }}</h3>
    <router-view />
  </n-config-provider>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { NConfigProvider, darkTheme } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()
const pageReaded = computed(() => store.state.pageReaded)

router.beforeEach((to, from) => {
  if (to.name === 'Rules' && !pageReaded.value.important) router.replace({ name: 'Home' })
  if (to.name === 'Join' && !pageReaded.value.rules) router.replace({ name: 'Home' })
  // router.replace({ name: 'Home' })
})

const pageTitle = computed(() => {
  let title = route.name
  const routeName = route.name
  if (routeName === 'Home') title = 'About'
  return title
})
</script>

<style lang="postcss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  @apply text-gray-400;
  background: #2c3e50;
}
</style>

<style lang="postcss" scoped>
.static-title {
  @apply text-[36px] mt-[80px] font-bold;
}

.page-title {
  @apply text-lg font-medium my-[40px];
}
</style>
