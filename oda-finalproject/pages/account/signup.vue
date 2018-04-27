<template>
<v-app id="inspire">
    <site-header></site-header>
    <sign-up></sign-up>
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SignUp from '~/components/SignUpForm.vue'
import firebase from '~/services/firebaseApp'

export default {
    components : {
        SiteHeader,
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
