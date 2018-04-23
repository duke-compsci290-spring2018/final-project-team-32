// http://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57c4caf96a49631abe29f1e4/1523961338145/?format=1500w
<template>
  <v-app id="inspire">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>ODA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/about" flat>About</v-btn>
        <v-btn to="/projects" flat>Projects</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-parallax src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57ea1f1315d5db35a6477a6f/1473216312216/?format=1500w">
      <v-layout column align-center justify-center>
        <h1>Welcome</h1>
      </v-layout>
    </v-parallax>
    <v-parallax src="http://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57c4caf96a49631abe29f1e4/1523961338145/?format=1500w">
      <v-layout column align-center justify-center>
      </v-layout>
    </v-parallax>
  </v-app>
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
