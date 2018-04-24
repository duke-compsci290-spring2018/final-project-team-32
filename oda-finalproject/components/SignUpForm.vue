<template>
  <div class="sign-up">
      <p>Let's create a new account!</p>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button v-on:click="signUp">Sign Up</button>
      <p>or go back to login</p>
  </div>
</template>

<script>
import firebase from '~/services/firebaseApp'

export default {
  name:'sign-up',
  data() {
    return {
      email: '',
      password: '' 
    };
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has been created !')
        },
        function (err) {
          alert('Oops. ' + err.message)
        }
      );
    }

  }
}
</script>

<style scoped>
</style>

