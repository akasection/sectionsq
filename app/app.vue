<template>
  <main class="absolute inset-0">
    <div class="fixed inset-0 bg-bgsq-700/6 bg-plus-sq">
      <NuxtPage />
    </div>
    <HomeMenu
      class="transition-all duration-200 fixed right-8 xl:right-32 bottom-8 lg:bottom-16"
      :activeMenu="activeMenu"
    />
  </main>
</template>

<script lang="ts" setup>
const route = useRoute();

// unnecessary but useful for type inference
const activeMenu = computed(() => route.name as 'index' | 'about' | 'showcase' | 'blog');
</script>
