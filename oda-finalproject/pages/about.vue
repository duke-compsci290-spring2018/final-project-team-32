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
        <v-card flat>
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
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import LangToggle from '~/components/LangToggle'
import thePeople from '~/static/personData.json'
import AboutCarousel from '~/components/AboutCarousel'
import { mapState } from 'vuex'

export default {
  components: {
      SiteHeader,
      LangToggle,
      AboutCarousel
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
