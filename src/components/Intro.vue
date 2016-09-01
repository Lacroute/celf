<template lang="html">
  <div class="intro">
    <img class="logo" @click="rotate" src="../../static/img/CELF.png" alt="" />
    <p v-show="tips">
      Cliquez pour entrer dans le portail du CELF
    </p>
  </div>
</template>

<script>
export default {
  name: 'Intro',

  data () {
    return {
      tips: true
    }
  },

  ready () {
    this.$root.inside = false
  },

  detached () {
    this.$root.inside = true
  },

  methods: {
    rotate: function (e) {
      // this.tips = false
      console.log('ROTATE', e.target)

      e.target.className += ' rotate'

      let that = this
      setTimeout(function () {
        e.target.parentNode.className += ' hide'
        console.log(e.target.nextSibling.nextSibling)
        e.target.nextSibling.nextSibling.className = 'fade-out'
        setTimeout(function () {
          that.$route.router.go('/accueil')
        }, 2000)
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .intro{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background: #fff;
    padding: 40px;
    background-color: inherit;
  }
  p{
    height: 25px;
  }
  .logo{
    max-height: 40px;
  }

  .rotate{
    animation: roll 3s forwards;
  }

  .fade-out{
    transition: opacity 1s;
    opacity: 0;
  }

  .hide{
    transition: background-color 0.5s;
    background-color: transparent;
  }

  @keyframes roll {
  0% {
    transform: rotate(0);
  }
  50%{
    transform: rotate(1440deg) scale(30);
  }
  100% {
    transform: rotate(0) scale(0);
  }
}

</style>
