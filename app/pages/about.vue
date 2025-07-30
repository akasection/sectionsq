<template>
  <main class="container-sq">
    <div class="relative pt-0 pb-8">
      <div class="page--title">
        <span class="letter-lead--title">A</span>
        <span>bout</span>
      </div>
      <ContentRenderer class="sq-content" v-if="about" :value="about"></ContentRenderer>
      <ContentNotFound v-else />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ContentRenderer } from '#components';

definePageMeta({
  pageTransition: {
    name: 'slide-fade',
    mode: 'in-out',
    duration: {
      enter: 150,
      leave: 300,
    },
  },
});

const { data: about } = await useAsyncData('about', () => queryCollection('content').path('/about').first());
</script>

<style scoped>
@reference '../assets/css/main.css';
</style>
