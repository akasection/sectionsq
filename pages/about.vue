<template>
  <main
    class="inset-x-4 top-0 lg:inset-x-16 min-w-sm w-[75%] lg:min-w-lg lg:w-[50%] absolute bg-white/80 text-bluesq-500"
  >
    <div class="relative">
      <div
        class="mt-32 pl-8 text-5xl font-serif tracking-[0.1rem] underline underline-offset-8 decoration-1 decoration-bluesq-400 lowercase"
      >
        About
      </div>
      <div class="h-[2000px]"></div>
      <span>OK</span>
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
});
</script>

<style lang="scss" scoped></style>
