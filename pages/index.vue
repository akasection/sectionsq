<template lang="pug">
  .sq-background(:class="'sq-background--' + color")
    template(name="SpawnSystem" v-if="startFadeIn")
      Spawner
    Rotator(:deg="rotation" shift="0,-15px,0" :scale="1+0.08*(scale)" :stop="stopStatus" @imdone="doSwitch" @outting="startShow = true")
    Rotator(:deg="-rotation+45" :reverse="true" shift="0,-15px,0" :scale="1.08-0.08*(scale)" :stop="stopStatus")
    transition(name="fade" mode="out-in")
      component(:is="logoComponent")
    transition(name="fade")
      span.sq-loading(ref="loader" :class="'l-' + iterator" v-if="!startShow") Now Loading


    template(v-if="DEBUGGER")
      button(style="position: fixed; left: 10px; top: 10px;" @click="goNext" ) HELLO NIGGA
</template>

<script>
import { TimelineLite, CSSPlugin } from 'gsap/all';
import Logo from '~/components/Logo'
import LogoReveal from '~/components/LogoReveal'
import Spawner from '~/components/Spawner'
import Rotator from '~/components/Rotator'

const plugins = [CSSPlugin];
export default {
  name: 'Home',
  components: {
    Logo,
    Rotator,
    LogoReveal,
    Spawner,
  },
  data: () => ({
    DEBUGGER: true,
    rotation: 0,
    scale: 0,
    iterator: 0,
    timeline: null,
    color: 'black',
    stopStatus: false,
    logoComponent: 'Logo',
    iteratorFunction: null,
    startShow: false,
    startFadeIn: false,
  }),
  watch: {
    stopStatus(val) {
      if (!val) return;
    },
    startFadeIn() {
      this.logoComponent = 'LogoReveal';
    },
    startShow(val) {
      clearInterval(this.iteratorFunction);
    }
  },
  async mounted() {
    await this.$nextTick();
    const { loader } = this.$refs;
    this.iteratorFunction = setInterval( () => {
      this.iterator = (this.iterator + 1) % 4;
    }, 800);
  },
  methods: {
    goNext() {
      this.stopStatus = true;

    },
    doSwitch() {
      console.log('mari start fadeoin disini');
      this.startFadeIn = true;
      this.color = 'white';
    }
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
  transition background-color 900ms linear

  &--black
    background-color #090909

  &--white
    background-color white

.sq-loading
  color white
  position absolute
  transform translate(0, 95px)
  font-family QuarcaCondThin
  font-size 18px
  letter-spacing 0.26em
  pointer-events none
  filter drop-shadow(0 0 4px rgba(78, 227, 254, 1))

  &.l-1:after
    content '.'
  &.l-2:after
    content '..'
  &.l-3:after
    content '...'

.fade-enter-active, .fade-leave-active
  transition opacity 750ms

.fade-enter, .fade-leave-to
  opacity 0
</style>
