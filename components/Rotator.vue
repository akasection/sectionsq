<template lang="pug">
  .sq-rotator.glow.glow-inset(:style="rotatorStyle")
</template>

<script>
export default {
  props: {
    deg: {
      type: Number,
      default: 0,
    },
    scale: {
      type: Number,
      default: 1,
    },
    shift: {
      type: String,
      default: '0,0,0',
    }
  },
  data: () => ({
    rotation: 0,
  }),
  computed: {
    rotatorStyle() {
      return `transform: translate3d(${this.shift}) rotate(${this.deg}deg) scale(${this.scale})`;
    },
  },
  mounted(){
    this.rotation = this.deg;
  },
}
</script>

<style lang="stylus" scoped>
.sq-rotator
  width 120px
  height 120px
  border-color white
  border-width 4px
  border-style solid
  position absolute
  // transition transform 700ms cubic-bezier(0.55, -0.54, 0.31, 1.29)
  transition transform 1100ms cubic-bezier(0, 0.37, 0.31, 1), scale 350ms linear
  &.glow
    box-shadow 0 0 33px 6px rgba(78,227,254,0.431),
      0 0 6px 0px rgba(78,227,254,0.549),
      inset 0 0 20px 5px rgba(78,227,254,0.431),
      inset 0 0 8px 0px rgba(78,227,254,0.549)

</style>
