// http://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57c4caf96a49631abe29f1e4/1523961338145/?format=1500w
<template>
  <v-app id="inspire" lang="en">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-parallax src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57ea1f1315d5db35a6477a6f/1473216312216/?format=1500w" alt="people talking around a desk">
      <v-layout column align-center justify-center>
      <div class="">
        <h1 v-if="$store.state.lang==='eng'" >Welcome</h1>
        <h1 v-else>Bienvenido</h1>
        <v-btn v-if="$store.state.lang==='eng'" to="/about">About Us</v-btn>
        <v-btn v-else to="/about">Nosotros</v-btn>
      </div>
      </v-layout>
    </v-parallax>
    <v-parallax src="http://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57c4caf96a49631abe29f1e4/1523961338145/?format=1500w" alt = "ODA logo">
      <v-layout column align-center justify-center>
      </v-layout>
    </v-parallax>
    <site-footer ></site-footer>
  </v-app>
</template>

<script>
import firebase from '~/services/firebaseApp'
import { mapState } from 'vuex'
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
import LangToggle from '~/components/LangToggle'

export default {
  components: {
    SiteHeader,
    LangToggle,
    SiteFooter
  },
}
</script>

<style scoped>
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
