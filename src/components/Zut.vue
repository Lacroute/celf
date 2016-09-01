<template lang="html">
  <p>
    Merde je sais pas comment on enlève cette page.
  </p>
</template>

<script>
export default {
  name: 'Zut',

  ready () {
    let that = this
    setTimeout(() =>
      that.$route.router.go('/videos')
    , 2000)
  }
}
</script>

<style lang="css" scoped>
p{
  padding: 30px;
}
</style>
