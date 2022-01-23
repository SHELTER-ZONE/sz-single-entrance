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
import { NButton } from 'naive-ui'
</script>

<style lang="postcss" scoped>
.description {
  @apply my-[30px];
}
</style>
