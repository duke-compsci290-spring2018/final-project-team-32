<template>
<v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-content>
        <v-container fluid>
            <sign-up></sign-up>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SignUp from '~/components/SignUpForm.vue'
import firebase from '~/services/firebaseApp'
import LangToggle from '~/components/LangToggle'

export default {
    components : {
        SiteHeader,
        LangToggle,
        SignUp
    },
    methods: {
        signOut: function() {
            let self = this
            firebase.auth().signOut().then(function() {
                    console.log("signed out")
                    self.$store.state.role = 'guest'
                // Sign-out successful.
            }, function(error) {
                    // An error happened.
            });
        }
    }
  
}
</script>

<style scoped>

</style>
