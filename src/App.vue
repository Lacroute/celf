<template>
  <div>
    <header v-show="inside">
      <a id="mute" v-el:mute href="#" @click.prevent="muteMusic" >
        <img src="../static/img/mute.png" alt="" />
      </a>
      <nav>
        <a v-link="{ path: '/accueil' }"><img class="logo" src="../static/img/CELF.png"></a>
        <ul>
          <li><a v-link="{ path: '/zut' }">Les vidéos</a></li>
          <li><a v-link="{ path: '/contact' }">Les contacts</a></li>
          <li><a href="../static/DP_CELF.pdf" target="_blank">Le CV</a></li>
        </ul>
      </nav>
      <audio v-el:audio src="static/theme.mp3" loop></audio>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inside: true
    }
  },

  ready () {
    this.$route.router.go('/intro')
  },

  methods: {
    muteMusic: function () {
      if (!this.$els.audio.paused) {
        this.$els.audio.pause()
        this.$els.mute.firstElementChild.src = '../static/img/play.png'
      } else {
        this.$els.audio.play()
        this.$els.mute.firstElementChild.src = '../static/img/mute.png'
      }
    }
  }
}
</script>

<style>
html {
  cursor: url(/static/img/banana.png), auto;
}

body {
  align-items: center;
  justify-content: center;
  background: url(/static/img/bg.jpg);
}

#app {
  color: #2c3e50;
  max-width: 800px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
  background: #fff;
  margin: 30px auto;
}

#app a {
  color: #53af31;
  text-decoration: none;
  cursor: url(/static/img/banana_action.png), auto;
}
h1{
  margin-bottom: 1.5em;
}
.logo {
  max-width: 100%;
  max-height: 100%;
}
.inline{
  display: inline;
  max-height: 35px;
  vertical-align: middle;
}
header {
  position: relative;
}
ul{
  text-align: center;
  margin: 0;
  padding: 0;
}
nav li{
  list-style: none;
  margin-top: 1em;
  display: inline-block;
}
nav li + li {
  margin-left: 40px;
}
li:before{
  content: ' ';
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(/static/img/boule.png);
  background-size: cover;
  vertical-align: middle;
}
#mute{
  max-width: 30px;
  min-width: 30px;
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
}
#mute img {
  max-width: 100%;
}

@media only screen and (max-width: 1024px){
  #app{
    font-size: 2rem;
  }
  .logo.inline{
    max-height: 80px;
  }
  nav{
    font-size: 2.5rem;
  }
  #mute{
    max-width: 80px;
    min-width: 80px;
    top: 20px;
    right: 20px;
  }
  li:before{
    width: 40px;
    height: 40px;
  }
}
</style>
