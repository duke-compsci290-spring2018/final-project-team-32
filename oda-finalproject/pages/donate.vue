<template>
<v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-container>
    <v-layout row>
        <!-- Checks if a user or admin is signed in, if not, page shows login element. State is held through the store, created through Vuex and located in /store -->
    <v-flex v-if="$store.state.role ==='user' || $store.state.role ==='admin'" xs12 :align-content-center="true" :align-center="true">
        <h1>Donate</h1>
        <!-- Form for donation valye -->
        <v-form>
            <v-text-field
                label="Amount to donate"
                v-model="amount"
                required
            ></v-text-field>
            <v-btn v-on:click="donate" color="info">Donate Now</v-btn>
        </v-form>

    </v-flex>
    </v-layout>
    <!-- If the user is a guest, shows login.  -->
    <v-layout row>
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
        amount: 0,
      }
    },
    components: {
        SiteHeader,
        LangToggle,
        LoginForm,
    },
    methods: {
        // Adds donation amount to user's firebase
        donate: function() {
            let self = this
            var user = firebase.auth().currentUser;
            var userId = user.uid;
            var currentAmount = 0
            firebase.database().ref().child('users/' + userId).update({
                amount:  currentAmount + parseInt(self.amount)
            })
            this.amount = 0
            alert('Thank you for your donation!')
        },
    },
}
</script>


<style>

</style>
