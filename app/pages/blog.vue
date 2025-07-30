<template>
  <main class="container-sq">
    <div class="relative pt-0 pb-8">
      <div class="page--title">
        <span class="letter-lead--title">B</span>
        <span>log</span>
      </div>
      <ContentNotFound />
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: 'slide-fade',
    mode: 'default',
    duration: {
      enter: 75,
      leave: 150,
    },
  },
});
</script>

<style scoped>
@reference '../assets/css/main.css';
</style>
