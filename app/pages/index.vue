<template>
  <div></div>
</template>

<script lang="ts" setup>
const route = useRoute();

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

<style scoped></style>
