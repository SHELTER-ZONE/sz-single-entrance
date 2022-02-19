<template>
  <div id="home">
    <div class="description common-width">
      <article>
        <p class="sub-title">歡迎來到 SHELTER ZONE (SZ) 邊境哨站</p>
        <n-alert :show-icon="false">
          <div class="text-justify">
            因發現過往許多人根本不看群規或眼盲，與為了因應不同目的而加入伺服器的人，
            同時為了保持伺服器的品質，所以SZ有自己一套加入伺服器的機制。<br>
          </div>
          <div class="text-center">
            如欲加入伺服器請根據指示與步驟進行操作
          </div>
        </n-alert>
      </article>

      <article>
        <p class="sub-title">SZ 是一個怎樣的伺服器？</p>
        <n-alert :show-icon="false">
          <n-alert class="mb-[20px]" :show-icon="false">
            <n-spin :show="loaded" size="small">
              <div class="flex w-full justify-evenly">
                <div class="flex items-center">
                  <n-icon class="mr-1"><UserMultiple /></n-icon>
                  總人數：
                  <span>{{ members }}</span>
                </div>
                <div class="flex items-center">
                  <n-icon class="mr-1"><UserOnline /></n-icon>
                  在線：
                  <span>{{ online }}</span>
                </div>
              </div>
            </n-spin>
          </n-alert>
          SZ是一個綜合技術交流群<br>
          主要為程式技術、Discord Bot開發、3D/2D技術、資訊技術交流<br>
          同時也是 <a class="text-[#63e2b7] underline" href="https://www.youtube.com/c/Proladon" target="_blank" rel="noopener noreferrer">Proladon</a> 的個人伺服器<br>
        </n-alert>
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
import { UserMultiple, UserOnline } from '@vicons/carbon'
import { computed, onBeforeMount, ref } from '@vue/runtime-core'
import { useMessage, NButton, NAlert, NSpin, NIcon } from 'naive-ui'
import { useStore } from 'vuex'
import { GetGuildMembers, GuildWidget } from '@/api/guild'

const store = useStore()
const message = useMessage()
const loggedIn = computed(() => store.state.auth.loggedIn)
const loading = ref(false)
const members = ref('')
const online = ref('')
const loaded = ref(true)

const login = async () => {
  loading.value = true
  if (loggedIn.value) return
  const [dcAuthLink, getLinkErr] = await store.dispatch('getDCAuthorizeUrl')
  if (getLinkErr) return message.error(getLinkErr)
  location.href = dcAuthLink
}

const getGuildMembers = async () => {
  const limit = 1000
  let done = false
  let memberCount = 0
  let page = 0
  while (!done) {
    const [res, err] = await GetGuildMembers({
      limit,
      page,
    })
    if (err) return
    if (res) {
      if (res.length < limit) done = true
      memberCount += res.length
      const lastUser = res[res.length - 1].user.id
      page = lastUser
    }

    if (!res) {
      memberCount = 'server error'
      done = true
    }
  }
  members.value = memberCount
}

const getOnlineMembers = async () => {
  const [res, err] = await GuildWidget()
  if (err) return
  online.value = res.presence_count
}

onBeforeMount(async () => {
  await getOnlineMembers()
  await getGuildMembers()
  loaded.value = false
})
</script>

<style lang="postcss" scoped>
.description {
  @apply my-[30px];
}

article {
  @apply mb-[30px];
}

.sub-title {
  @apply text-md mb-[5px] font-bold;
}
</style>
