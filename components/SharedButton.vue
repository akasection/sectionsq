<template lang="pug">
.sq-share(ref="sharer")
  a(href="https://fb.com/akasection" target="_blank")
    .sq-button.fb
      img(src="~assets/fb.png" width="24" height="24")
  a(href="https://www.linkedin.com/in/akasection" target="_blank")
    .sq-button.ln
      img(src="~assets/in.png" width="16" height="16")
  a(href="https://github.com/Axection" target="_blank")
    .sq-button.gh
      img(src="~assets/gh.png" width="16" height="16")
  a(href="https://soundcloud.com/section" target="_blank")
    .sq-button.sc
      img(src="~assets/sc.png" width="16" height="16")
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'SharerCollection',
  props: {
    startAnimation: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    startAnimation(val) {
      if (!val) return;
      this.doAnimate();
    },
  },
  methods: {
    async doAnimate() {
      const { sharer } = this.$refs;
      await this.$nextTick();
      this.timeline = gsap.timeline();
      this.timeline.to(sharer, 1.333, {
        opacity: 1,
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.sq-share {
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: flex;
  justify-content: left;
  opacity: 0;
}

.sq-button {
  width: 36px;
  height: 36px;
  padding: 2px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 0 #000000dd;
  border-color: #ffffff88;
  border-style: solid;
  border-width: 3px;
  opacity: 0.84;
  margin-left: 14px;
  transition: all 80ms linear;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-3px) scale(1.08);
  }

  &:active {
    transform: scale(0.96);
  }

  &.fb {
    background-color: #3b5998;
    border-color: #a6cdff;
  }

  &.ln {
    background-color: #0077b5;
  }

  &.gh {
    background-color: black;
    border-color: #fbfbfb;
  }

  &.sc {
    background-color: #ff7700;
    border-color: #ffb26a;
  }
}
</style>
