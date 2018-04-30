<template>
  <div class="sign-up">
    <v-flex xs4>
      <!-- Form using english and spanish for creating an account -->
    <p v-if="$store.state.lang==='eng'">Let's create a new account!</p>
    <p v-else>Vamos a crear una cuenta</p>
    <v-form v-if="$store.state.lang==='eng'" v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        required
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
            name="input-10-1"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="password"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter
          ></v-text-field>
          <v-flex xs6>
          <v-select
            :items="roles"
            v-model="role"
            label="Select role"
            class="input-group--focused"
            item-value="text"
          ></v-select>
          </v-flex>
      <v-btn v-on:click="signUp" color="info">Sign Up</v-btn>
      <p>Already have an account? <nuxt-link to="/donate">Login here</nuxt-link></p>
    </v-form>
    <v-form v-else v-model="valid">
      <v-text-field
        label="Nombre"
        v-model="name"
        required
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
            name="input-10-1"
            label="Contraseña"
            hint="Al menos 8 carácteres"
            v-model="password"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter
          ></v-text-field>
          <v-flex xs6>
          <v-select
            :items="roles"
            v-model="role"
            label="Selecciona papel"
            class="input-group--focused"
            item-value="text"
          ></v-select>
          </v-flex>
      <v-btn v-on:click="signUp" color="info">Inscribirse</v-btn>
      <p>¿Ya tiene una cuenta? <nuxt-link to="/donate">iniciar sesión acá</nuxt-link></p>
    </v-form>
    </v-flex>
  </div>
</template>

<script>
import firebase from '~/services/firebaseApp'
import { mapState } from 'vuex'

export default {
  name:'sign-up',
  data() {
    return {
      valid: false,
      email: '',
      password: '' ,
      name: '',
      e1: true,
      roles: [
        {text: 'user'},
        {text: 'admin'}
      ],
      role: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    };
  },
  methods: {
    // creates a user with email and password in firebase
    signUp: function() {
      let self = this
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
          alert('Your account has been created !')
          self.$store.state.role = self.role
          self.writeUserData(user.uid, self.name, self.email, self.role)

        },
        function (err) {
          alert('Oops. ' + err.message)
        }
      );
    },
    // Writes other important user data to firebase database
    writeUserData: function(userId, name, email, userRole) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        role: userRole,
        amount: 0
    });
    this.email='',
    this.password='',
    this.name='',
    this.role = ''
},



  }
}
</script>

<style scoped>
</style>

