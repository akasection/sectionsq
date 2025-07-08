<template>
  <main
    class="px-10 top-0 bottom-0 lg:inset-x-16 min-w-sm w-[75%] lg:min-w-lg lg:w-[50%] fixed bg-white/80 overflow-y-auto"
  >
    <div class="relative pt-0 pb-8">
      <div
        class="mt-32 mb-16 pl-8 text-5xl font-serif tracking-[0.1rem] underline underline-offset-8 decoration-1 text-bluesq-400 decoration-bluesq-400 lowercase"
      >
        <span class="letter-lead--title">A</span>
        <span>bout</span>
      </div>
      <ContentRenderer class="sq-content" v-if="about" :value="about"></ContentRenderer>
      <div v-else>Content not found</div>
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
      enter: 75,
      leave: 150,
    },
  },
});

const { data: about } = await useAsyncData('about', () => queryCollection('content').path('/about').first());
</script>

<style scoped>
@reference '../assets/css/main.css';
</style>
