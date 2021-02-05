<template lang="pug">
  .logo
    .sq-logo(ref="logo" :class="dropShadow")
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'LogoPrelaod',
  props: {
    switched: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    timeline: null,
    dropShadow: 'glow',
  }),
  computed: {

  },
  watch: {
    switched() {
      // TODO: fade out current, change background-image, fade in with rescale
    },
  },

  async mounted() {
    const { logo } = this.$refs;
    await this.$nextTick();
    this.timeline = gsap.to(logo, 2, {
      scale: 1.07,
      repeat: -1,
      yoyo: true,
    });
  },
};
</script>

<style lang="stylus" scoped>
.logo
  z-index 2
.sq-logo
  width 100px
  height 100px
  background-image url('~assets/logo.png')
  background-size cover
  transition filter 350ms linear
  z-index 3
  transform translate(0, -15px)

  &.glow
    filter drop-shadow(0 0px 4px rgba(78, 227, 254, 0.48) )
  &.bright
    filter drop-shadow(0 0 20px white)
</style>
