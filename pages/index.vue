<template lang="pug">
  .sq-background.sq-background--black
    Logo
    Rotator(:deg="rotation" shift="0,-15px,0" :scale="1+0.08*(scale)")
    Rotator(:deg="-rotation+45" shift="0,-15px,0" :scale="1.08-0.08*(scale)")
    span.sq-loading Now Loading...
</template>

<script>
import Logo from '~/components/Logo'
import Rotator from '~/components/Rotator'

export default {
  name: 'Home',
  components: {
    Logo,
    Rotator,

  },
  data: () => ({
    rotation: 0,
    scale: 0,
  }),
  mounted() {
    const loop = () => {
      this.rotation += 45;
      this.scale = !this.scale + 0;
    };
    setInterval(loop, 1150);
    loop();
  },
}
</script>

<style lang="stylus">
@font-face
  font-family QuarcaCondThin
  src url('~static/quarcacondthin.otf')
.sq-background
  height 100vh
  width 100vw
  display flex
  justify-content center
  align-items center

  &--black
    background-color #090909

.sq-loading
  color white
  position absolute
  transform translate(0, 95px)
  font-family QuarcaCondThin
  font-size 18px
  letter-spacing 0.26em
  pointer-events none
  filter drop-shadow(0 0 4px rgba(78, 227, 254, 1))
</style>
