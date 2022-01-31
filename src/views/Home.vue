<template>
  <div id="home">
    <div class="description common-width">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab blanditiis omnis, velit nostrum officiis aliquam? Possimus perspiciatis pariatur at quasi corporis quaerat eligendi illum ipsa reprehenderit quas. Adipisci, in!
    </div>

    <n-button
      :loading="loading"
      strong
      secondary
      round
      type="primary"
      @click="login"
    >
      登入以繼續
    </n-button>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const loggedIn = computed(() => store.state.auth.loggedIn)
const loading = ref(false)

const login = async () => {
  loading.value = true
  if (loggedIn.value) return
  const [dcAuthLink, getLinkErr] = await store.dispatch('getDCAuthorizeUrl')
  if (getLinkErr) return console.error(getLinkErr)
  location.href = dcAuthLink
}

onMounted(async () => {
  console.log('home')
})
</script>

<style lang="postcss" scoped>
.description {
  @apply my-[30px];
}
</style>
