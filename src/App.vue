<template>
  <div class="">
    <a v-link="{ path: '/' }"><img class="logo" src="./assets/CELF.png"></a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  ready () {
    this.$route.router.go('/accueil')
    // this.$route.router.go('/videos')
  }
}
</script>

<style>
html {
  height: 100%;
  cursor: nw-resize;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
h1{
  margin-bottom: 1.5em;
}
.logo {
  max-width: 100%;
  max-height: 100%;
  max-width: 10px;
}
.inline{
  display: inline;
  max-height: 35px;
  vertical-align: middle;
}
ul{
  text-align: left;
}
li{
  list-style: none;
  margin-top: 1em;
}
li:before{
  content: ' ';
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(./assets/boule.jpg);
  background-size: cover;
  vertical-align: middle;
}
</style>
