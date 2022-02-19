<template>
  <div v-if="user" id="entry-check">
    <n-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      class="client-info common-width"
      :show-label="false"
      :show-require-mark="false"
      :show-feedback="true"
    >
      <n-form-item>
        <n-statistic label="IP">
          <span v-if="ip" class="text-md">{{ ip }}</span>
          <n-spin v-if="!ip" size="small" />
        </n-statistic>
      </n-form-item>

      <n-form-item>
        <n-statistic label="Country">
          <span v-if="country" class="text-md">{{ country }}</span>
          <n-spin v-if="!country" size="small" />
        </n-statistic>
      </n-form-item>

      <n-statistic label="Source">
        <n-form-item path="source">
          <n-select v-model:value="formData.source" :options="sources" />
        </n-form-item>
      </n-statistic>

      <n-statistic label="Discord ID">
        <n-form-item>
          <!-- <n-input v-model:value="formData.userID" maxlength="18" /> -->
          <span class="text-md">{{ user.id }}</span>
        </n-form-item>
      </n-statistic>
    </n-form>

    <div class="common-width">
      <n-alert type="success" :show-icon="false" class="code-show ">
        <span style="margin-right: 10px">{{ entryCode || '請生成驗證碼指令' }}</span>
        <n-tooltip v-if="entryCode">
          <template #trigger>
            <n-icon class="cursor-pointer" @click="copyEntryCode">
              <Copy />
            </n-icon>
          </template>
          複製驗證碼指令
        </n-tooltip>
      </n-alert>

      <p class="help-text" @click="showHelp = true">
        <n-icon size="16"><Help /></n-icon>
        <span class="ml-1">點我查看認證步驟</span>
      </p>
    </div>

    <div class="grid justify-center gap-[20px] mb-[40px]">
      <CooldownButton
        v-if="showCooldown"
        :loading="loading"
        btnText="生成驗證碼指令"
        :active="cooldown"
        :seconds="count"
        @click="generateCode"
      />
      <a href="https://discord.gg/D3MQjxzTgg" target="_blank" rel="noopener noreferrer">
        <n-button quaternary type="primary" class="underline">加入伺服器</n-button>
      </a>
    </div>
  </div>

  <CountrySelectModal v-if="manual" @change="updateCountry" />
  <HelpModal v-if="showHelp" @close="showHelp = false" />
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { NButton, NIcon, NTooltip, NStatistic, NSelect, NInput, NForm, NFormItem, NAlert, NSpin, useMessage } from 'naive-ui'
import { GetClientIP, GetIPInfo } from '@/api/clientInfo'
import { GetEntryCode } from '@/api/entryCheck'
import { Copy, Help } from '@vicons/carbon'
import CooldownButton from '@/components/CooldownButton.vue'
import CountrySelectModal from './components/CountrySelectModal.vue'
import copy from 'copy-to-clipboard'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import HelpModal from './components/HelpModal.vue'

const message = useMessage()
const router = useRouter()
const store = useStore()
const user = computed(() => store.state.auth.user)

const ip = ref(null)
const showHelp = ref(false)
const country = ref(null)
const loading = ref(false)
const count = ref(0)
const entryCode = ref('')
const showCooldown = ref(true)
const cooldown = ref(true)
const formData = reactive({
  source: null,
  userID: null,
})
const formRules = reactive({
  source: {
    required: true,
    trigger: 'blur',
    message: '請選擇',
  },
  userID: {
    required: true,
    trigger: 'blur',
    message: '請填寫正確ID',
    validator: (r, v) => {
      if (!v) return false
      return v.length === 18 && /^\d+$/.test(v)
    },
  },
})
const formRef = ref(null)
const manual = ref(false)

const sources = [
  {
    label: '巴哈文章',
    value: '巴哈文章',
  },
  {
    label: 'Youtube',
    value: 'Youtube',
  },
  {
    label: '朋友介紹',
    value: '朋友介紹',
  },
  {
    label: 'Google',
    value: 'Google',
  },
]

const copyEntryCode = () => {
  copy(entryCode.value)
  message.success('已複製驗證碼指令 !')
}

const updateCountry = async (selectCountry) => {
  country.value = selectCountry
  if (!ip.value) ip.value = '0.0.0.0'
  await generateCode()
}

const getClientIP = async () => {
  const [res, err] = await GetClientIP()
  if (err) {
    console.log(err)
    ip.value = '0.0.0.0'
    return false
  }
  ip.value = res.ip
  return true
}
const getIPInfo = async () => {
  const [res, err] = await GetIPInfo({ ip: ip.value })
  if (err) {
    message.error(err)
    return false
  }
  country.value = res.country_name
  return true
}

const getEntryCode = async () => {
  const [res, err] = await GetEntryCode({
    country: country.value,
    id: user.value.id,
    source: formData.source,
    ip: ip.value,
  })
  if (err) {
    message.error(err)
    loading.value = false
    return
  }
  showCooldown.value = false
  entryCode.value = `sz/check ${res.data}`
  cooldown.value = true
  count.value = 30
  setTimeout(() => {
    showCooldown.value = true
  }, 100)
}

const generateCode = async () => {
  loading.value = true
  if (!country.value) {
    manual.value = true
    loading.value = false
    return
  }
  formRef.value.validate(async (errors) => {
    if (errors) {
      loading.value = false
      return
    }
    if (!await getEntryCode()) {
      loading.value = false
    }
  })
}

onMounted(async () => {
  if (!user.value) return router.replace({ name: 'Home' })
  await getClientIP()
  await getIPInfo()
})
</script>

<style lang="postcss" scoped>
.client-info {
  @apply grid grid-cols-2 gap-[20px];
}

.source {
  @apply max-w-[300px] m-auto;
}
.code-show {
  @apply mt-[40px] text-center;
}
:deep(.n-form-item-blank) {
  @apply justify-center;
}

:deep(.n-statistic) {
  @apply flex flex-col justify-between;
}

:deep(.n-base-selection-placeholder) {
  @apply justify-center;
}

.help-text {
  @apply text-yellow-400 flex items-center justify-center text-sub underline mt-[10px] cursor-pointer;
}
</style>
