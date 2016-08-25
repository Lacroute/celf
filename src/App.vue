<template>
  <div class="">
    <a v-link="{ path: '/accueil' }"><img class="logo" src="../static/img/CELF.png"></a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  ready () {
    this.$route.router.go('/accueil')
  }
}
</script>

<style>
html {
  height: 100%;
  cursor: nw-resize;
}

body {
  align-items: center;
  justify-content: center;
  height: 100%;
  background: gold;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
  background: bisque;
  margin-top: 200px;
  padding: 30px
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
  background: url(../static/img/boule.jpg);
  background-size: cover;
  vertical-align: middle;
}
</style>
