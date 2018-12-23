<template lang="pug">
  .sq-rect.glow(ref="rectsq")
    slot(name="child")
</template>

<script>
import { TimelineLite, CSSPlugin } from 'gsap/all';
const colors = [
  '#ffd7d7dd', // red,
  '#64f7f7dd', // blue
  '#b8f59788', // green
  '#fff9d8dd', // yellow
];
const plugin = [ CSSPlugin ];
export default {
  name: 'Rectsq',
  data: () => ({
    timeline: null,
  }),
  async mounted() {
    const { rectsq } = this.$refs;
    await this.$nextTick();
    // this.timeline = new TimelineLite({
    //   onComplete: () => this.timeline.restart(),
    // });
    // this.timeline.to(rectsq, 2, {
    //   css: { borderColor: '#ffd7d7' },
    // }).to(rectsq, 2, {
    //   css: { borderColor: '#fff9d8' },
    // }).to(rectsq, 2, {
    //   css: { borderColor: '#4ee3fe' },
    // });
  },
}
</script>

<style lang="stylus" scoped>
.sq-rect
  width 640px
  height 640px
  border-color #4ee3feaa
  border-width 4px
  border-style solid
  position fixed
  background-color #ffffffbb
  z-index 2

  display flex
  justify-content center
  align-items center

  transition transform 385ms cubic-bezier(0.55, 0.01, 0.31, 0.96)
  &:hover
    transform scale(1.01)
  // transition transform 1100ms cubic-bezier(0, 0.37, 0.31, 1), scale 350ms linear
  &.glow
    box-shadow 0 0 42px 3px rgba(78,227,254,0.331),
      0 0 6px 0px rgba(78,227,254,0.549),
      inset 0 0 20px 5px rgba(78,227,254,0.231),
      inset 0 0 8px 0px rgba(78,227,254,0.549)
</style>
