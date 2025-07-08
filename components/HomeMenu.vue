<template>
  <div class="lg:w-[440px] lg:min-w-32 min-w-32 m-8 p-4 bg-bluesq-200/10 menu--base">
    <ul>
      <li>
        <NuxtLink to="/">
          <div class="menu-link menu--home" :class="{ 'menu--selected': props.activeMenu === 'index' }">
            <span class="menu-text-line"><span class="letter-lead">H</span>ome</span>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          <div class="menu-link menu--about" :class="{ 'menu--selected': props.activeMenu === 'about' }">
            <span class="menu-text-line"><span class="letter-lead">A</span>bout</span>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/showcase">
          <div class="menu-link menu--showcase" :class="{ 'menu--selected': props.activeMenu === 'showcase' }">
            <span class="menu-text-line"><span class="letter-lead">S</span>howcase</span>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">
          <div class="menu-link menu--blog" :class="{ 'menu--selected': props.activeMenu === 'blog' }">
            <span class="menu-text-line"><span class="letter-lead">B</span>log</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  activeMenu?: 'index' | 'about' | 'showcase' | 'blog';
}>();
</script>

<style scoped>
@reference "../assets/css/main.css";

:deep(*) {
  --hover-content: 'A menu';
}

.letter-lead {
  @apply text-bluesq-300 bg-white/50 pl-1 mr-0.5 py-0;
}

.menu--base:hover .menu-link {
  @apply mb-4;
}

.menu-link {
  @apply text-bluesq-400 lowercase mb-4 text-4xl font-serif tracking-[0.2rem] transition-all duration-75 w-full relative z-10;

  &::before {
    @apply absolute top-0 left-0 w-full h-full bg-white/0 transition-all duration-300 scale-x-0 origin-left ease-out -z-10;
    content: '';
  }

  &.menu--about {
    --hover-content: 'Personal information about SECTION';
  }

  &.menu--home {
    --hover-content: 'The start of SECTION';
  }

  &.menu--showcase {
    --hover-content: 'See what SECTION has created and built';
  }
  &.menu--blog {
    --hover-content: 'Insights and thoughts on SECTION';
  }

  &::after {
    @apply absolute text-sm text-bluesq-300 -bottom-full lg:-bottom-4 font-medium -left-0.5 tracking-[0.1rem]
      pointer-events-none opacity-0 right-0.5 bg-white/0 transition-all duration-250 ease-in-out;
    content: var(--hover-content);
  }

  &:hover {
    @apply text-bluesq-400/40  translate-x-0.5 bg-white/70 tracking-[0.24rem] !mb-4;

    & .letter-lead {
      @apply text-bluesq-400/60 bg-transparent;
    }

    &::after {
      @apply opacity-100 translate-x-0.5 bg-white/70;
    }
  }

  &.menu--selected {
    @apply transition-[background] delay-300 text-white bg-bluesq-300/40 tracking-[0.24rem] z-10;

    &::before {
      @apply bg-bluesq-300/40 scale-x-100;
    }

    & .letter-lead {
      @apply text-bluesq-500/70 bg-transparent;
    }

    &::after {
      @apply opacity-0 translate-x-0.5  transition-all;
    }

    &:hover::after {
      @apply opacity-100;
    }
  }
}
</style>
