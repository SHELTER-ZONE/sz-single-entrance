<template>
  <div id="entry-check">
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
        <n-form-item path="userID">
          <n-input v-model:value="formData.userID" maxlength="18" />
        </n-form-item>
      </n-statistic>
    </n-form>

    <div class="common-width">
      <n-alert type="success" :show-icon="false" class="code-show ">
        {{ entryCode || '請生成驗證碼' }}
        <n-tooltip v-if="entryCode">
          <template #trigger>
            <n-icon class="cursor-pointer" @click="copyEntryCode">
              <Copy />
            </n-icon>
          </template>
          複製驗證碼
        </n-tooltip>
      </n-alert>
    </div>

    <div class="grid justify-center gap-[20px] mb-[40px]">
      <CooldownButton :loading="loading" btnText="生成驗證碼" :active="cooldown" :seconds="count" @click="generateCode" />
      <n-button quaternary type="primary" class="underline">加入伺服器</n-button>
    </div>
  </div>

  <CountrySelectModal v-if="manual" @change="updateCountry" />
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { NButton, NIcon, NTooltip, NStatistic, NSelect, NInput, NForm, NFormItem, NAlert, NSpin, useMessage } from 'naive-ui'
import { GetClientIP, GetIPInfo } from '@/api/clientInfo'
import { GetEntryCode } from '@/api/entryCheck'
import { Copy } from '@vicons/carbon'
import CooldownButton from '@/components/CooldownButton.vue'
import CountrySelectModal from './components/CountrySelectModal.vue'
import copy from 'copy-to-clipboard'

const message = useMessage()
const ip = ref(null)
const country = ref(null)
const loading = ref(false)
const count = ref(0)
const entryCode = ref('')
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
  message.success('已複製驗證碼 !')
}

const updateCountry = async (country) => {
  country.value = country
  if (!ip.value) ip.value = '0.0.0.0'
  await generateCode()
}

const getClientIP = async () => {
  const [res, err] = await GetClientIP()
  if (err) {
    console.log(err)
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
    id: formData.userID,
    source: formData.source,
    ip: ip.value,
  })
  if (err) {
    message.error(err)
    loading.value = false
    return
  }
  entryCode.value = res.data
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
    if (!errors) {
      if (!await getEntryCode()) loading.value = false
    }
  })
}

onMounted(async () => {
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
</style>
