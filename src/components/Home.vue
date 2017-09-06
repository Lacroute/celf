<template lang="html">

  <h1>
    Bienvenue sur le portail du<img class="logo inline" src="../../static/img/CELF.png">!!
  </h1>
  <div class="overview">
    <p>Le Comité extraordinaire du loto français vous ouvre les portes d'un loto animé par une équipe de professionnels, formés à manipuler les boules et les blagues.</p>
    <p>Oubliez un temps tous vos problèmes !<br/>Dans la convivialité, cédez à la joie de crier « Bingo ! » avant vos amis et goûtez à l'émotion du dernier numéro manquant.<br/>La garantie <img class="logo inline" src="../../static/img/CELF.png">, c'est la bonne humeur au service de l'amusement.</p>
    <p>Le <img class="logo inline" src="../../static/img/CELF.png">, c'est aussi le loto dont vous êtes le héros : pour y participer, ramenez un lot à mettre en jeu, il vous donnera droit à vos cartons de jeu.</p>
    <p>Le <img class="logo inline" src="../../static/img/CELF.png">, l'efficacité impartiale au service de la convivialité.</p>
  </div>
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
  .overview{
      padding: 20px;
  }

  p + p {
    margin-top: 1.5em;
  }
</style>
