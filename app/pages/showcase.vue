<template>
  <main class="container-sq">
    <div class="relative pt-0 pb-8">
      <div class="page--title">
        <span class="letter-lead--title">S</span>
        <span>howcase</span>
      </div>
      <ContentNotFound />
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: 'slide-fade',
    mode: 'in-out',
    duration: {
      enter: 75,
      leave: 150,
    },
  },
})

const { data: showcaseList } = await useAsyncData('showcase', () =>
  queryCollection('content').path('/showcase').first()
)
</script>

<style scoped>
@reference '../assets/css/main.css';
</style>
