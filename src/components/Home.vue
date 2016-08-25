<template lang="html">

  <h1>
    Bienvenue sur le portail du<img class="logo inline" src="../assets/CELF.png">!!
  </h1>
  <ul>
    <li>Jonas de la repro a compilé nos vidéos <a v-link="{ path: '/zut' }">ICI</a></li>
    <li>Sylvie du pôle CESE, Communication Événements Sortie d'Équipe nous a inscrit sur le réseau des jeunes ici <a href="https://www.facebook.com/lecelf">https://www.facebook.com/lecelf</a></li>
    <li>Thiery le cuisto de la cafet a écrit un dossier de presse <a href="./assets/dp.pdf">ICI</a></li>
  </ul>

  <fieldset>
    <legend>Sponsors</legend>
    <img src="../assets/sponsors/rushlin_hp.gif" alt="" />
    <img src="../assets/sponsors/ie.gif" alt="" />
    <img src="../assets/sponsors/ww.gif" alt="" />
    <img src="../assets/sponsors/teleshopping.gif" alt="" />
    <img src="../assets/sponsors/vign_formulaire.gif" alt="" />
    <img src="../assets/sponsors/vign_photovilles.gif" alt="" />
    <img src="../assets/sponsors/vign_resto.gif" alt="" />
    <img src="../assets/sponsors/amour.gif" alt="" />
  </fieldset>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="css">
</style>
