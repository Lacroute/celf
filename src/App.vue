lo  <template>
  <div>
    <header v-show="inside">
      <nav>
        <a v-link="{ path: '/accueil' }"><img class="logo" src="../static/img/CELF.png"></a>
        <ul>
          <li><a v-link="{ path: '/zut' }">Les vidéos</a></li>
          <li><a v-link="{ path: '/contact' }">Les contacts</a></li>
          <li><a href="./assets/pdf/dp.pdf" target="_blank">Le CV</a></li>
        </ul>
      </nav>
      <audio v-el:audio src="static/Stevie_Wonder_-_Part_Time_Lover.mp3" loop></audio>
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
  }
}
</script>

<style>
html {
  height: 100%;
  cursor: url(../static/img/banana.png), auto;
}

body {
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url(../static/img/bg.jpg);
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
  background: url(../static/img/boule.png);
  background-size: cover;
  vertical-align: middle;
}
</style>
