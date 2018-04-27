<template>
  <div class="login">
    <h3>Log In</h3>
    <v-flex xs4>
    <v-form v-model="valid">
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
            name="input-10-1"
            hint="At least 8 characters"
            v-model="password"
            label="Password"
            min="8"
            required
            counter
          ></v-text-field>

      <v-btn v-on:click="handler" color="info">Log In</v-btn>
      <p>Don't have an account? You can <nuxt-link to="/account/signup">create one here</nuxt-link></p>
    </v-form>
    </v-flex>
      <p v-if="loggedin">Show after logged in!</p>
      <button @click="signOut">test sign out</button>
  </div>
</template>

<script>
import firebase from '~/services/firebaseApp'
// import currentRole from '~/services/firebaseAuth'
import { mapState } from 'vuex'

export default {
  name:'login-form',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      loggedin: false,
      formError: null,
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ]
    };
  },
  methods: {
    handler: function() {
      this.signIn();
      // this.emitAuth();
    },
    signIn: function() {
      let self = this;
      // console.log(this.$store.state.role)
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function(user) {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
          self.loggedin= true;
          var userId = firebase.auth().currentUser.uid;
            firebase.database().ref('users/'+ userId).child('role').once('value').then(function(snapshot){
            self.$store.state.role = snapshot.val();
      });
          alert('You are now signed in!')
        },
        function(err) {
          alert ("Oops. " + err.message)
        }
      );
    },
    emitAuth: function() {
      // try {
      //   this.$store.dispatch(async('login'), {
      //     username: this.email,
      //     password: this.password
      //   })
      //   this.email = ''
      //   this.password = ''
      //   this.formError = null
      // } catch (e) {
      //   this.formError = e.message
      // }
    },
    signOut: function() {
      firebase.auth().signOut().then(function() {
        console.log("signed out")
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

