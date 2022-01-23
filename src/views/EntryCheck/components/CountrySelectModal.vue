<template>
  <n-modal
    v-model:show="showModal"
    :mask-closable="false"
    @close="closeModal"
  >
    <n-card
      style="width: 600px;"
      title="手動選擇"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-form ref="formRef" :model="formData" :rules="formRules" :show-require-mark="false">
        <n-form-item path="country" label="Country">
          <n-select v-model:value="formData.country" :options="countriesList" />
        </n-form-item>
      </n-form>

      <div class="text-right">
        <n-button secondary round type="primary" @click.prevent="submit">確認</n-button>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { NCard, NButton, NForm, NFormItem, NModal, NSelect } from 'naive-ui'
import countries from '@/static/countries'
import { onMounted } from '@vue/runtime-core'

const emit = defineEmits(['close', 'change'])
const countriesList = ref([])
const showModal = ref(true)
const formRef = ref(null)
const formData = reactive({
  country: null,
})

const formRules = {
  country: {
    required: true,
    trigger: 'blur',
  },
}

const submit = () => {
  formRef.value.validate((errors) => {
    if (errors) return
    emit('change', formData.country)
    closeModal()
  })
}

const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

onMounted(() => {
  countriesList.value = countries.map(country => ({
    label: country,
    value: country,
  }))
})
</script>

<style lang="postcss" scoped>
</style>
