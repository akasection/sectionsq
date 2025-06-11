<template>
  <div class="w-md min-w-40 m-8 p-4 bg-blue-200/10">
    <ul>
      <li>
        <NuxtLink to="/">
          <div class="menu-link menu--home"><span class="letter-lead">H</span>ome</div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          <div class="menu-link menu--about"><span class="letter-lead">A</span>bout</div>
        </NuxtLink>
      </li>
      <NuxtLink to="/showcase">
        <div class="menu-link menu--showcase"><span class="letter-lead">S</span>howcase</div>
      </NuxtLink>
      <li>
        <NuxtLink to="/blog">
          <div class="menu-link menu--blog"><span class="letter-lead">B</span>log</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@reference "../assets/css/main.css";

:deep(*) {
  --hover-content: 'something special';
}

.letter-lead {
  @apply text-blue-500/30 bg-white/50 px-1 py-0;
}

.menu-link {
  @apply text-blue-500/50 lowercase mb-4 text-4xl font-serif font-light tracking-[0.4rem] transition-transform duration-75 w-full relative;

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

  &::before {
    @apply absolute text-sm text-blue-300/50 -bottom-4 left-0 tracking-[0.1rem] pointer-events-none opacity-0 right-0.5 bg-white/70;
    content: var(--hover-content);
  }

  &:hover {
    @apply text-blue-600/20  translate-x-0.5 bg-white/70;

    & .letter-lead {
      @apply text-cyan-500/10 bg-transparent;
    }

    &::before {
      @apply opacity-100 translate-x-0.5;
    }
  }
}
</style>
