<template>
  <div class="login">
      <h3>Log In</h3>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button v-on:click="handler" to="/donate">Sign In</button>
      <p>Don't have an account? You can <nuxt-link to="/account/signup">create one here</nuxt-link></p>
      <button @click="onAuth">test</button>
  </div>
</template>

<script>
import firebase from '~/services/firebaseApp'

export default {
  name:'login-form',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handler: function() {
      this.signIn();
      this.emitAuth();
      // this.onAuth();
    },
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function(user) {
          alert('You are now signed in!')
        },
        function(err) {
          alert ("Oops. " + err.message)
        }
      );
    },
    emitAuth: function() {
      // console.log("test")
    },
    onAuth: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("user signed in!");
          console.log(user);
    // User is signed in.
        } else {
          console.log("user not signed in!")
    // No user is signed in. Show Sign in methods or Auth anonymously 
        }
      });
    }

  }
}
</script>

<style scoped>
</style>

