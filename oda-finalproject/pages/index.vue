<template>
  <section class="container">
    <img src="http://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57c4caf96a49631abe29f1e4/1523961338145/?format=1500w"/>
    <h1>Home</h1>
    <h2><nuxt-link to="/about">About</nuxt-link></h2>
    <h2><nuxt-link to="/projects">Projects</nuxt-link></h2>
  </section>
</template>

<script>
if (process.browser) {
  require('vue-carousel')
}
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
