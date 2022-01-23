<template>
  <n-button
    class="cooldown-btn"
    strong
    secondary
    round
    type="primary"
    :disabled="!CountDone"
    @click="$emit('next')"
  >
    <n-countdown
      :on-finish="done"
      :render="renderCountdown"
      :duration="1000 * seconds"
      :active="active"
    />
  </n-button>
</template>

<script setup>
import { h, ref } from '@vue/runtime-core'
import { NButton, NCountdown } from 'naive-ui'

const emit = defineEmits(['next', 'done'])

const props = defineProps({
  btnText: {
    type: String,
    default: 'Next',
  },
  active: {
    type: Boolean,
    default: true,
  },
  seconds: {
    type: Number || String,
    default: 10,
  },
})

const CountDone = ref(false)

const renderCountdown = ({
  seconds,
}) => {
  if (CountDone.value) {
    return [
      h(
        'span',
        {
          style: 'display: inline-block;',
        },
        [props.btnText],
      ),
    ]
  }

  if (!CountDone.value) {
    return [
      h(
        'span',
        {
          style: 'display: inline-block;',
        },
        [String(seconds).padStart(2, '0'), ' ', 's'],
      ),
    ]
  }
}

const done = () => {
  CountDone.value = true
  emit('done')
}
</script>

<style lang="postcss" scoped>
.cooldown-btn {
  @apply mt-[30px] text-md px-[20px] py-[20px];
}
</style>
