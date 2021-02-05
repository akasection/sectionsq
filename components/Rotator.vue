<template lang="pug">
  .sq-rotator.glow.glow-inset(ref="sq" :style="rotatorStyle")
</template>

<script>
import { gsap } from 'gsap';
import { timeWait } from '~/func/shared';

const scaleFactor = 0.09;
const oF = 0.8;
export default {
  props: {
    deg: {
      type: Number,
      default: 0,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    scale: {
      type: Number,
      default: 1,
    },
    shift: {
      type: String,
      default: '0,0,0',
    },
    stop: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    timeline: gsap.timeline(),
    currentDeg: 0,
  }),
  computed: {
    rotatorStyle() {
      return `transform: translate3d(${this.shift}) rotate(${this.deg}deg) scale(${this.scale}); opacity: ${1 - ((1 - oF) * this.reverse)}`;
    },
  },
  watch: {
    stop() {
      // eslint-disable-next-line no-console
      console.log('Done.');
    },
  },
  async mounted() {
    const { sq } = this.$refs;
    this.currentDeg = this.deg;
    await this.$nextTick();
    this.timeline = gsap.timeline({
      onComplete: () => {
        if (!this.stop) {
          this.timeline.restart();
          return;
        }
        this.$emit('outting');
        gsap.to(sq, 2.2, {
          scale: 0,
          opacity: 0,
          rotation: '+= 90',
          onComplete: () => {
            // console.log('tae');
            this.$emit('imdone');
          },
        });
      },
    });
    this.timeline
      .to(sq, 1.1, {
        scale: this.scale > 1 ? `-=${scaleFactor}` : `+=${scaleFactor}`,
        opacity: oF + ((1 - oF) * this.reverse),
        rotation: `+= ${45 * (this.reverse ? -1 : 1)}`
      })
      .to(sq, 1.1, {
        scale: this.scale > 1 ? `+=${scaleFactor}` : `-=${scaleFactor}`,
        opacity: 1 - ((1 - oF) * this.reverse),
        rotation: `+= ${45 * (this.reverse ? -1 : 1)}`
      });
  },
};
</script>

<style lang="stylus" scoped>
.sq-rotator
  width 120px
  height 120px
  border-color white
  border-width 4px
  border-style solid
  position absolute
  z-index 1
  // transition transform 700ms cubic-bezier(0.55, -0.54, 0.31, 1.29)
  // transition transform 1100ms cubic-bezier(0, 0.37, 0.31, 1), scale 350ms linear
  &.glow
    box-shadow 0 0 33px 6px rgba(78,227,254,0.431),
      0 0 6px 0px rgba(78,227,254,0.549),
      inset 0 0 20px 5px rgba(78,227,254,0.431),
      inset 0 0 8px 0px rgba(78,227,254,0.549)

</style>
