<template>
<v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-container fluid grid-list-xl>
    <v-layout row>
    <v-flex v-if="$store.state.role ==='user' || $store.state.role ==='admin'" xs12 :align-content-center="true" :align-center="true">
        <h1>Donate</h1>
        <p>{{lorem}}</p>
    </v-flex>
    <v-flex v-if="$store.state.role ==='guest'" xs12>
        <login-form></login-form>
    </v-flex>
    </v-layout>
    </v-container>
</v-app>
</template>


<script>
import SiteHeader from '~/components/SiteHeader'
import LangToggle from '~/components/LangToggle'
import LoginForm from '~/components/LoginForm.vue'
import firebase from '~/services/firebaseApp'
import { mapState } from 'vuex'


export default {
  data () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
      }
    },
    components: {
        SiteHeader,
        LangToggle,
        LoginForm
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
#content-container{
    margin: 2%;
}
</style>
