<template>
  <main class="absolute inset-0">
    <div class="fixed inset-0 bg-blue-200/10">
      <NuxtPage />
    </div>
    <HomeMenu class="fixed right-32 bottom-16" :activeMenu="activeMenu" />
  </main>
</template>

<script lang="ts" setup>
const route = useRoute();

// unnecessary but useful for type inference
const activeMenu = computed(() => route.name as 'index' | 'about' | 'showcase' | 'blog');
</script>
