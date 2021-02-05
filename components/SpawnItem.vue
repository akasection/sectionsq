<template lang="pug">
svg.sq-uare(:style="variance" ref="square")
</template>

<script>
import { gsap } from 'gsap';
import { getRandomInt, getRandomReal } from '~/func/shared';

const colorCycle = [
  '#ffd7d7dd', // red,
  '#ffd7d7dd', // red,
  '#ffd7d7dd', // red,
  '#64f7f7dd', // blue
  '#64f7f7dd', // blue
  '#64f7f7dd', // blue
  '#b8f59788', // green
  '#fff9d8dd', // yellow
  '#fff9d8dd', // yellow
  '#fff9d8dd', // yellow
  '#b5b5b555', // gray
  '#b7edff66', // dark blue
  '#b7edff66', // dark blue
  '#ffa2a266', // dark red
];
// const APosition = ['fg', 'md', 'bg'];

export default {
  name: 'SpawnItem',
  props: {
    position: {
      type: String,
      required: true,
    },
    anchor: {
      type: Number,
      default: 50,
    },
  },

  data: () => ({
    color: 'white',
    x: 0,
    y: 0,
    size: 1,
    accelerator: 1,
    duration: 1000,
    timeline: gsap.timeline(),
  }),
  computed: {
    variance() {
      return `
        background-color: ${this.color};
        transform: translate3d(${this.x}vw, ${this.y}vh, 0) scale(${this.size});
        box-shadow: 0 0 5px 0 ${this.color};
      `;
    },
    getBaseScale() {
      const scale = {
        // baseScale, lower deviation, higher deviation
        fg: [1, 2.25],
        md: [0.5, 1.25],
        bg: [0.2, 0.6],
      };
      return scale[this.position];
    },
  },
  async mounted() {
    const { square } = this.$refs;
    this.instantiate();
    await this.$nextTick();
    this.timeline = gsap.timeline({
      onComplete: () => {
        this.$emit('imdone', this);
      },
    });
    this.timeline
      .fromTo(
        square,
        this.duration / 2000,
        {
          opacity: 0,
          scale: this.size,
        },
        {
          opacity: 1,
        },
        'baseStart'
      )
      .to(square, this.duration / 2000, {
        opacity: 0,
      })
      .to(
        square,
        this.duration / 1000,
        {
          scale: this.size + getRandomReal(0, this.getBaseScale[0]),
          x: `+= ${(this.x - this.anchor) * this.accelerator}px`,
          y: `+= ${(this.y - this.anchor) * this.accelerator}px`,
        },
        'baseStart'
      );
  },
  methods: {
    instantiate() {
      this.x = getRandomInt(1, 99);
      this.y = getRandomInt(1, 99);
      this.size = getRandomReal(this.getBaseScale[0], this.getBaseScale[1]);
      this.duration = getRandomInt(1750, 5000);
      this.color = colorCycle[getRandomInt(0, colorCycle.length - 1)];
      this.accelerator = getRandomReal(0.5, 4);
    },
  },
};
</script>

<style lang="stylus" scoped>
.sq-uare {
  width: 64px;
  height: 64px;
  position: fixed;
  // border-style solid
  // border-color black
  // border-width 2px
  top: 0;
  left: 0;
}
</style>
