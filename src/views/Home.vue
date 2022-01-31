<template>
  <div id="home">
    <div class="description common-width">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab blanditiis omnis, velit nostrum officiis aliquam? Possimus perspiciatis pariatur at quasi corporis quaerat eligendi illum ipsa reprehenderit quas. Adipisci, in!
    </div>
    <router-link :to="{name: 'Important'}">
      <n-button strong secondary round type="primary">Next</n-button>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted } from '@vue/runtime-core'
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const loggedin = computed(() => store.state.auth.loggedin)

onMounted(async () => {
  if (loggedin.value) return router.replace({ name: 'Home' })

  const [dcAuthLink, getLinkErr] = await store.dispatch('getDCAuthorizeUrl')
  if (getLinkErr) return console.error(getLinkErr)
  location.href = dcAuthLink
})
</script>

<style lang="postcss" scoped>
.description {
  @apply my-[30px];
}
</style>
