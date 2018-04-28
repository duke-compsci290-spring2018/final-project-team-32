<template>
<v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-tabs fixed-tabs>
        <v-tab ripple>
            About
        </v-tab>
        <v-tab ripple>
            Media
        </v-tab>
    <v-tab-item>
        <v-card>
            <v-card-title><h1>Background</h1></v-card-title>
            <v-card-text>
              <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
                  <p>What nourishes ODA is the value of being able to make a difference in a person’s life. It does not matter how or when we were going to grow in size, but rather how many seeds we can plant by showing up for our community of returning and deported immigrants. We know that by staying true to that simple principle, we will grow and evolve as a sustainable and powerful community.
                  </p>
              </v-card-text>
              <v-card-text>
                  Otros Dreams en Acción is significant in three important ways. First, ODA advocates for the claim to legal rights and responsibilities—including but not limited to legal international mobility—as members of the United States national community from our current location, al otro lado, in towns and cities across Mexico. Second, ODA advocates for integration and transformation in Mexico. And last but not least, the members of ODA support each other, independent of what someone may have done in the past, the circumstances under which someone returned to Mexico, and the diversity of immigration status and mobility within our community. 
              </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>     <h1 class="sec02">Our Values</h1>
          </v-card-title>
          <v-card-text>
            In ODA, we seek to be authentic and adventurous.  We are determined to contribute to our community by accepting challenges, as well as letting friendship guide us. We fight the good fight when it comes to Justice for everyone. Kindness, Accountability, Optimism, Community and Love are the values that we share and try to put into action every day.  

            We know, firsthand, about how the current immigration system in the United States criminalizes us and our families. Just like the seeds of a dandelion that grow where they are blown by the wind, we believe in our right and our potential to thrive wherever we land. Just like dandelion seeds that need soil, water and sunlight, we still need basic needs met in order to grow and thrive aquí y allá: safety, health, community, access to educational opportunities, family unification, and legal, international mobility. 
          </v-card-text>
          <v-card-text>
            We are committed to the struggle for the full recognition of our Human Rights as immigrants wherever we may find ourselves, and we are also committed to our Human Responsibilities to care for ourselves, our families, our communities, and the natural resources that sustain all of us.

            We are not a typical non-profit organization. We are a members-based, grassroots organization funded through the heartfelt work and dedication of our members, direct donations, and project-based grants. We make decisions through consensus and distribute resources according to dynamic priorities and circumstances.
          </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title> <h1> Our Leadership Team </h1></v-card-title>
            <v-card-text> The idea of Otros Dreams en Acción was created just before sunset on October 28, 2015 over a meal in Newport Beach, California. Without knowing exactly what would come next, but with the determination to keep the embers glowing from all that had come before, Maggie Loredo and Jill Anderson committed to build ODA. They met each other and a growing network of bilingual and bicultural youth in Mexico via the book Los Otros Dreamers.  Donations from the book funded the founding of ODA and the creation of this website.
            </v-card-text>
            <v-card-text>
            Today, ODA is supported by allies around the world, a strong network of returned and deported youth across Mexico, and some of our Leadership Team are: Maggie Loredo, Jill Anderson, Victor Saucedo, Enrique Rojas, Cesar Maldonado, Adriana Figueroa, Victor Hugo Manuel and many more. </v-card-text>
            <v-card-text>
                <about-carousel :people="thePeople"></about-carousel>
            </v-card-text>
        </v-card>
    </v-tab-item>
    <v-tab-item>
        <v-card flat>
            <v-card-text>Contents for Item 2 go here</v-card-text>
        </v-card>
    </v-tab-item>  
    </v-tabs>
    <site-footer></site-footer>
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
import LangToggle from '~/components/LangToggle'
import thePeople from '~/static/personData.json'
import AboutCarousel from '~/components/AboutCarousel'
import { mapState } from 'vuex'

export default {
  components: {
      SiteHeader,
      LangToggle,
      AboutCarousel,
      SiteFooter
  },

  data() {
    return {
      thePeople
    };
  },

  methods: {
    signOut: function() {
        let self = this
        firebase.auth().signOut().then(function() {
            self.$store.state.role= 'guest'
            console.log("signed out")
        // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
    }
  }
}
</script>

<style>

</style>
