<template lang="html">

  <h1>
    Bienvenue sur le portail du<img class="logo inline" src="../../static/img/CELF.png">!!
  </h1>
  <ul>
    <li>Jonas de la repro a compilé nos vidéos <a v-link="{ path: '/zut' }">ICI</a></li>
    <li>Sylvie du pôle CESE, Communication Événements Sortie d'Équipe nous a inscrit sur le réseau des jeunes ici <a href="https://www.facebook.com/lecelf">https://www.facebook.com/lecelf</a></li>
    <li>Thiery le cuisto de la cafet a écrit un dossier de presse <a href="./assets/pdf/dp.pdf">ICI</a></li>
  </ul>

  <fieldset>
    <legend>Sponsors</legend>
    <img src="../../static/sponsors/rushlin_hp.gif" alt="" />
    <img src="../../static/sponsors/ie.gif" alt="" />
    <img src="../../static/sponsors/ww.gif" alt="" />
    <img src="../../static/sponsors/teleshopping.gif" alt="" />
    <img src="../../static/sponsors/vign_formulaire.gif" alt="" />
    <img src="../../static/sponsors/vign_photovilles.gif" alt="" />
    <img src="../../static/sponsors/vign_resto.gif" alt="" />
    <img src="../../static/sponsors/amour.gif" alt="" />
  </fieldset>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="css">
</style>
