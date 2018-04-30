<template>
 <v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-content>
      <v-container center grid-list-md dark>
        <v-card> 
          <v-card-title v-if="$store.state.lang ==='eng'"> <h1> #DREAMERSINMÉXICO </h1> </v-card-title>
          <v-card-title v-else> <h1> #DREAMERSENMÉXICO </h1> </v-card-title>
          <v-card-text v-if="$store.state.lang ==='eng'"> We are still dreamers in Mexico. We recognize that the term "dreamer" originally refers to the proposed but failed dream act that would have benefited a limited number of immigrant youth in the US. For ODA, the term "dreamer" connects us to our roots in the US and the struggle for immigrant rights there, while it also reminds us that dreams do not end at the border. We dream of a safer, stronger Mexico. We dream of families re-united. Our dreams are our struggle, and we dream of recognition for all of us who choose to live as bi national citizens with the right to education, employment, and wellbeing in the home of our choice.</v-card-text>
          <v-card-text v-else> Aún somos "Dreamers" en México. Reconocemos que el término original de “Dreamer” se refiere a la propuesta que nunca pasaba, el llamado DREAM Act, que hubiera resultado en beneficios a un número limitado de jóvenes migrantes en Estados Unidos. Para ODA, el término “Dreamer” nos conecta con nuestras raíces estadounidenses desde México de igual manera que nos recuerda que los sueños no terminan en la frontera y después de la deportación. Sonamos con un México más seguro y fuerte. Sonamos con la reunificación de nuestras familias. Nuestros sueños también son nuestras luchas, y luchamos para que todos y todas gozan del reconocimiento digno como ciudadanos binacionales con el derecho a la educación, al empleo y el poder vivir con nuestras familias en el lugar de nuestra elección.</v-card-text>
        </v-card>
<!--         <v-card>
          <v-card-title> </v-card-title>
        </v-card> -->
        <v-card align="center"> 
          <Tweet :id="'983717279027179520'" dark></Tweet>
          <div align="center">
            <a class="twitter-timeline"  href="https://twitter.com/hashtag/dreamers" data-widget-id="990458493500051456">#dreamers Tweets</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
          </div>
        </v-card>
      </v-container>
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
    <v-container fluid grid-list-xl>
      <v-card> 
        <v-card-title> <h2> Other Organizations </h2> </v-card-title>
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
import { Tweet } from 'vue-tweet-embed'

if (process.browser) {
  require('vue-carousel')
}

export default {
  components: {
      SiteHeader,
      LangToggle,
      WhyCarousel,
      Tweet,
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

