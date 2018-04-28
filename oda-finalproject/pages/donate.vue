<template>
<v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-container fluid grid-list-xl>
    <v-layout row>

    <v-flex v-if="$store.state.role ==='user' || $store.state.role ==='admin'" xs12 :align-content-center="true" :align-center="true">
        <h1>Donate</h1>
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
    
    <v-layout>
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
        lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
        amount: 0
      }
    },
    components: {
        SiteHeader,
        LangToggle,
        LoginForm
    },
    methods: {
        donate: function() {
            let self = this
            var user = firebase.auth().currentUser;
            var userId = user.uid;
            var currentAmount = 0
            firebase.database().ref('users/' + userId + '/amount').once("value").then(function(snapshot){
                currentAmount = snapshot.val()
            })
            firebase.database().ref().child('users/' + userId).update({
                amount:  currentAmount + parseInt(self.amount)
            })
            this.amount = 0
            alert('Thank you for your donation!')
        }
    }
}
</script>


<style>
#content-container{
    margin: 2%;
}
</style>
