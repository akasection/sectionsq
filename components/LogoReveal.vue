<template lang="pug">
  .reveal-layout
    Rectsq
      template(slot="child")
        .logo
          .sq-logo.shadower(ref="shadower")
          .sq-logo(ref="logo" :class="dropShadow")
          span.sq-section(ref="section") SECTION
          .sq-description(ref="desc")
            span.sq-fe Front-end
            span.sq-slash /
            span.sq-gd Game Developer
</template>

<script>
import { TimelineLite, CSSPlugin } from 'gsap/all';
import Rectsq from '~/components/Rectsq';

export default {
  name: 'LogoReveal',
  components: {
    Rectsq,
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
  }),
  computed: {

  },
  watch: {
    switched(){
      //TODO: fade out current, change background-image, fade in with rescale
    },
  },

  async mounted() {
    const { logo } = this.$refs;
    await this.$nextTick();
    // this.timeline = new TimelineLite();
    // this.timeline.to(logo, 1, {
    //   css: {
    //     filter: 'drop-shadow(0 0 20px #fff)',
    //   },
    //   repeat: -1,
    //   yoyo: true,
    // });
  },
}
</script>

<style lang="stylus" scoped>
@font-face
  font-family QuarcaCondBook
  src url('~static/quarcacondbook.otf')

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
  letter-spacing 0.12em
  text-shadow 0 0 7px rgba(90, 90, 90, 0.4)

.sq-description
  line-height 0.3
  font-family QuarcaCondBook
  font-size 18px
  letter-spacing 0.09em
  text-shadow 0 0 5px rgba(255, 90, 90, 0.08)

.sq-slash
  font-size 32px
  color #d6c777

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
</style>
