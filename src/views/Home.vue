<template>
  <div id="home">
    <div class="description common-width">
      <article>
        <p class="sub-title">歡迎來到 SHELTER ZONE (SZ) 邊境哨站</p>
        <div>
          因發現過往許多人根本不看群規或眼盲，與為了因應不同目的而加入伺服器的人
          同時為了保持伺服器的品質，所以SZ有自己一套加入伺服器的機制。<br>
        </div>
        <div>
          如欲加入伺服器請根據指示與步驟進行操作
        </div>
      </article>

      <article>
        <p class="sub-title">SZ 是一個怎樣的伺服器？</p>
        <div>
          SZ是一個綜合技術交流群<br>
          主要為程式技術、Discord Bot開發、3D/2D技術、資訊技術交流<br>
          同時也是<a class="text-[#63e2b7]" href="https://www.youtube.com/c/Proladon" target="_blank" rel="noopener noreferrer">Proladon</a>的個人伺服器<br>
        </div>
      </article>
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
import { computed, ref } from '@vue/runtime-core'
import { useMessage, NButton } from 'naive-ui'
import { useStore } from 'vuex'

const store = useStore()
const message = useMessage()
const loggedIn = computed(() => store.state.auth.loggedIn)
const loading = ref(false)

const login = async () => {
  loading.value = true
  if (loggedIn.value) return
  const [dcAuthLink, getLinkErr] = await store.dispatch('getDCAuthorizeUrl')
  if (getLinkErr) return message.error(getLinkErr)
  location.href = dcAuthLink
}
</script>

<style lang="postcss" scoped>
.description {
  @apply my-[30px];
}

article {
  @apply mb-[30px];
}

.sub-title {
  @apply text-md mb-[5px] font-medium;
}
</style>
