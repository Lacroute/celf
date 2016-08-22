<template>
  <h1>LES VIDÉOS !!</h1>
  <div v-for="url in urls">
    <iframe type="text/html" width="640" height="390"
    v-bind:src="url"
    frameborder="0"></iframe>
  </div>
  <!--  -->
</template>

<script>
export default {
  name: 'Videos',

  data: function () {
    return {
      urls: [
        'https://www.youtube.com/embed/U-6SMxavkUI', 'https://www.youtube.com/embed/uK6TfT8eHrM'
      ]
    }
  }
}
</script>

<style>
</style>
