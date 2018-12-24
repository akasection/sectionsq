<template lang="pug">
  .reveal-layout
    Rectsq(@imdone="doAnimate")
      template(slot="child")
        .logo
          .hide.sq-logo.shadower(ref="shadower")
          .hide.sq-logo(ref="logo" :class="dropShadow")
          .hide.sq-section(ref="section") SECTION
          .hide.sq-description(ref="desc")
            span.sq-fe Front-end
            span.sq-slash /
            span.sq-gd Game Developer

    SharedButton(:startAnimation="animationState")
</template>

<script>
import { TimelineLite, CSSPlugin } from 'gsap/all';
import Rectsq from '~/components/Rectsq';
import SharedButton from '~/components/SharedButton';
import { timeWait } from '~/func/shared';

export default {
  name: 'LogoReveal',
  components: {
    Rectsq,
    SharedButton,
  },
  props: {
    switched: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    timeline: null,
    dropShadow: 'bright',
    animationState: false,
  }),
  computed: {

  },
  watch: {
    switched(){
      //TODO: fade out current, change background-image, fade in with rescale
    },
  },


  async mounted() {
  },
  methods: {
    doAnimate(){
      const { logo, shadower, section, desc } = this.$refs;
      console.log('COK0');
      this.timeline = new TimelineLite({
        onComplete: () => this.animationState = true,
      });
      this.timeline.from([logo, shadower], 1.67, {
        y: '+=22',
      }, 0).from(section, 1.37, {
        y: '+=25',
      }, 0.14).from(desc, 1.17, {
        y: '+=18',
      }, 0.54).to([logo, shadower], 1.47, {
        opacity: 1,
      }, 0).to(section, 1.17, {
        opacity: 1,
      }, 0.12).to(desc, 1, {
        opacity: 1,
      }, 0.5);
    },
  },
}
</script>

<style lang="stylus" scoped>
@font-face
  font-family QuarcaCondBook
  src url('~assets/font/quarcacondbook.otf')

.logo
  transform translate3d(0, -2.25vh, 0)
  text-align center
  z-index 2

.sq-logo
  width 320px
  height 320px
  background-image url('~assets/si-logo-thicc.png')
  background-size cover
  transition filter 350ms linear
  z-index 4
  position relative

  &.shadower
    filter blur(5px)
    position absolute
  &.glow
    filter drop-shadow(0 0px 4px rgba(78, 227, 254, 0.48) )
  &.bright
    filter drop-shadow(0 0 20px #fff) brightness(1.1)

.sq-section
  line-height 1.2
  font-family QuarcaCondBook
  font-size 72px
  color #5a5a5a
  letter-spacing 0.09em
  text-shadow 0 0 7px rgba(90, 90, 90, 0.4)

.sq-description
  line-height 0.3
  font-family QuarcaCondBook
  font-size 18px
  letter-spacing 0.09em
  text-shadow 0 0 5px rgba(255, 90, 90, 0.08)

.sq-slash
  font-size 32px
  color #ffe55d

.sq-fe
  vertical-align super
  color #21b2cd

.sq-gd
  vertical-align bottom
  color #f27c7e

.reveal-layout
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  transition all 1250ms cubic-bezier(0.63, -0.03, 0.27, 0.97)

.hide
  opacity 0
</style>
