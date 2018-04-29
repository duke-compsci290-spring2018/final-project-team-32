<template>
 <v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-content>
        <v-container fluid grid-list-xl>
<!--     <v-layout justify-space-around>
    <ul class="nav-images">
        <v-flex xs4 class="nav-img">
            <a>
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/57cd1771ebbd1afd7c11cbfe/57d9b7b8e3df281fe6231c76/1473886216298/una-vida-dos-paises.png" alt="women looking at map">
            </a>
          </v-flex>
        <v-flex xs4 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74o9dJC3dpk1TW7lp'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/57cd1771ebbd1afd7c11cbfe/57d882b93e00bec130c39edc/1473807473596/migrantologo.png" alt="women looking at map">
            </a>
        </v-flex>
        <v-flex xs4 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74vjFL1tl0GDKMprJ'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/57cd1771ebbd1afd7c11cbfe/57cd19d05016e14621603835/1473280395869/logo+%281%29.png" alt="women looking at map">
            </a>
        </v-flex>
    </ul>
    </v-layout> -->
      <v-card> 
      <v-card-text>
        <why-carousel :links="theLinks"></why-carousel>
      </v-card-text>
    </v-card>
</v-container>
</v-content>
<site-footer></site-footer>
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
import LangToggle from '~/components/LangToggle'
import theLinks from '~/static/links.json'
import WhyCarousel from '~/components/WhyCarousel'
import { mapState } from 'vuex'
import axios from 'axios'

if (process.browser) {
  require('vue-carousel')
}

export default {
  components: {
      SiteHeader,
      LangToggle,
      WhyCarousel,
      SiteFooter
  },
  data() {
    return {
      theLinks
    }
  }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.nav-img img{
    width: 150px;
}
#content-container{
    margin: 10%;
}
.flex-pad {
    padding: 50px;
    text-align: left;
/*    border-radius: 40px 40px 40px 40px;*/
}

  #carousel {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

</style>

