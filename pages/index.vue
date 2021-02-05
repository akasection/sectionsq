<template lang="pug">
  .sq-background(:class="'sq-background--' + color")
    template(name="SpawnSystem" v-if="startFadeIn")
      Spawner
    Rotator(:deg="rotation" shift="0,-15px,0" :scale="1+0.08*(scale)" :stop="stopStatus" @imdone="doSwitch" @outting="startShow = true")
    Rotator(:deg="-rotation+45" :reverse="true" shift="0,-15px,0" :scale="1.08-0.08*(scale)" :stop="stopStatus")

    transition(name="fade" mode="out-in")
      Logo(v-if="showLogo")

    LogoReveal(v-if="showReveal")
    transition(name="fade")
      span.sq-loading(ref="loader" v-if="!startShow" :disabled="preloadComplete" @click="goNext" :class="{ 'loading': !preloadComplete }") {{ text }}

    template(v-if="DEBUGGER")
      button(style="position: fixed; left: 10px; top: 10px;" @click="goNext") HELLO NIGGA
</template>

<script>
import loadImage from 'image-promise';
import { timeWait } from '~/func/shared';
import Logo from '~/components/Logo';
import LogoReveal from '~/components/LogoReveal';
import Spawner from '~/components/Spawner';
import Rotator from '~/components/Rotator';

export default {
  name: 'Home',
  components: {
    Logo,
    Rotator,
    LogoReveal,
    Spawner,
  },
  data: () => ({
    DEBUGGER: false,
    rotation: 0,
    scale: 0,
    iterator: 0,
    timeline: null,
    color: 'black',
    stopStatus: false,
    showLogo: true,
    showReveal: false,
    iteratorFunction: null,
    startShow: false,
    startFadeIn: false,
    text: 'Loading',
    preloadImages: null,
    preloadComplete: false,
  }),
  watch: {
    stopStatus(val) {
      if (!val) return;
    },
    async startFadeIn() {
      this.showLogo = false;
      await timeWait(3600);
      this.showReveal = true;
    },
    startShow(val) {
      clearInterval(this.iteratorFunction);
    },
    async preloadImages(val) {
      const preloadPromise = [];
      val.forEach(item => preloadPromise.push(loadImage(item)));
      const preloadResponse = await Promise.all(preloadPromise);
      // console.log(preloadResponse);
      this.text = '【 Enter 】';
      this.preloadComplete = true;
    }
  },
  async mounted() {
    await this.$nextTick();
    const { loader } = this.$refs;
    // Loads all neccessary images
    const imagePreloaderPromise = [
      import('~/assets/fb.png'),
      import('~/assets/fb.svg'),
      import('~/assets/gh.png'),
      import('~/assets/logo.png'),
      import('~/assets/sc.png'),
      import('~/assets/si-logo-thicc.png'),
    ];
    this.preloadImages = (await Promise.all(imagePreloaderPromise)).map(
      item => item.default
    );
    this.iteratorFunction = setInterval(() => {
      this.iterator = (this.iterator + 1) % 4;
    }, 800);
  },
  methods: {
    goNext() {
      this.stopStatus = true;
      this.text = '- Entering -';
    },
    doSwitch() {
      console.log('Loading completed.');
      this.startFadeIn = true;
      this.color = 'white';
    }
  },
};
</script>

<style lang="stylus">
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
  font-family Quarca
  font-style normal
  font-size 18px
  letter-spacing 0.26em
  cursor pointer
  filter drop-shadow(0 0 4px rgba(78, 227, 254, 1))
  transition all 185ms linear

  .loading
    opacity 0.6

  &:hover
    text-shadow 0 0 3px rgba(78, 227, 254, 1)
    letter-spacing 0.27em

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
