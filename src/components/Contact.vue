<template>
  <ul>
    <li>
      <p>
        Facebook > <a href="https://www.facebook.com/lecelf" target="_blank">https://www.facebook.com/lecelf</a>
      </p>
    </li>
    <li>
      <p>
        Instagram > <a href="https://www.instagram.com/le.celf/">https://www.instagram.com/le.celf</a>
      </p>
    </li>
    <li>
      <p>
        Twitter > <a href="https://twitter.com/le_celf">https://twitter.com/le_celf</a>
      </p>
    </li>
    <li>
      <p>
        Courriel > <a href="mailto:bingo@lecelf.net">bingo@lecelf.net</a>
      </p>
    </li>
    <li>
      <p>
        Booking > <a href="mailto:isa@bejoue.fr">isa@bejoue.fr</a>
      </p>
    </li>

  </ul>
</template>
<script>
export default {
  name: 'Intro',

  data () {
    return {}
  }
}
</script>
<style media="screen" scoped>

  ul{
    text-align: left;
    padding: 30px;
  }
  li{
    display: block;
  }
  p{
    display: inline;
  }
  @media only screen and (max-width: 1024px){
    ul{
      margin-top: 60px;
    }
    li {
      margin-bottom: 20px;
    }
  }
</style>
