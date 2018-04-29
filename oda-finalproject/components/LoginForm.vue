<template>
  <v-container fluid class="login">
    <v-flex xs4>
    <v-form v-if="$store.state.lang ==='eng'" v-model="valid">
      <h3>Log In</h3>
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
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter
            required
        ></v-text-field>
      <v-btn v-on:click="handler" color="info">Log In</v-btn>
      <p>Don't have an account? You can <nuxt-link to="/account/signup">create one here</nuxt-link></p>
    </v-form>
    <v-form v-else v-model="valid">
      <h3>Iniciar Sesión</h3>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
            name="input-10-1"
            hint="Al menos 8 carácteres"
            v-model="password"
            label="Contraseña"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            required
            counter
        ></v-text-field>
      <v-btn v-on:click="handler" color="info">Iniciar Sesión</v-btn>
      <p>¿No tiene una cuenta? La puede <nuxt-link to="/account/signup">crear acá</nuxt-link></p>
    </v-form>
    </v-flex>
  </v-container>
</template>

<script>
import firebase from '~/services/firebaseApp'
import { mapState } from 'vuex'

export default {
  name:'login-form',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      formError: null,
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'],
      e1: true

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

  }
}
</script>

<style scoped>
</style>

