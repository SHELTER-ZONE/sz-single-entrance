<template>
  <div id="rules" class="page-padding">
    <div class="step-wrapper common-width">
      <n-steps vertical :current="current" :status="currentStatus">
        <n-step v-for="rule in rules" :key="rule.order" :title="ruleTitle(rule)">
          <p v-if="current >= rule.order" class="text-left">{{ rule.content }}</p>
        </n-step>
      </n-steps>
    </div>

    <CooldownButton v-if="showCooldown" :seconds="5" :btnText="btnText" :active="count" @next="nextRule" />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { NSteps, NStep } from 'naive-ui'
import CooldownButton from '../components/CooldownButton.vue'
import rules from '@/static/rules'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import anime from 'animejs'
import { onMounted } from '@vue/runtime-core'

const store = useStore()
const router = useRouter()

const showCooldown = ref(true)
const current = ref(1)
const currentStatus = ref('process')
const count = ref(true)
const btnText = ref('Next')

const nextRule = () => {
  if (current.value === rules.length) {
    store.commit('SET_PAGE_READED', 'rules')
    return router.push({ name: 'Links' })
  }
  showCooldown.value = false
  current.value += 1
  if (current.value === rules.length) btnText.value = '同意並加入'
  setTimeout(() => {
    showCooldown.value = true
  }, 100)
}

const ruleTitle = (rule) => {
  if (current.value < rule.order) return `Rule ${rule.order}`
  return rule.title
}

onMounted(() => {
  anime({
    targets: '.step-wrapper',
    opacity: [0, 1],
    duration: 1000,
  })
})
</script>
