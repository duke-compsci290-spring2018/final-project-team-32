<template>
    <v-toolbar>
    <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant="mini"
      light
      absolute
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/projects">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/faq">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>FAQ</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/donate">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Donate</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <v-toolbar-title>ODA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.lang ==='eng'" class="hidden-sm-and-down">
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/about" flat>About</v-btn>
        <v-btn to="/projects" flat>Projects</v-btn>
        <v-btn to="/faq" flat>FAQ</v-btn>
        <v-btn to="/donate" color="blue">Donate</v-btn>
        <v-btn v-if="$store.state.role ==='user' || $store.state.role ==='admin'" @click="signOut" >Sign Out</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn to="/" flat>Inicio</v-btn>
        <v-btn to="/about" flat>Nosotros</v-btn>
        <v-btn to="/projects" flat>Proyectos</v-btn>
        <v-btn to="/faq" flat>FAQ</v-btn>
        <v-btn to="/donate" color="blue">Donar</v-btn>
        <v-btn v-if="$store.state.role ==='user' || $store.state.role ==='admin'" @click="signOut" >Desinscribirse</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import firebase from '~/services/firebaseApp'
import { mapState } from 'vuex'

export default {
    name: 'site-header',
    data() {
        return {
          drawer: false,
          home: false
        }
    },
    methods: {
      signOut: function() {
        let self = this
        firebase.auth().signOut().then(function() {
            self.$store.state.role= 'guest'
            alert('You are now signed out!')
        // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
    },
    }

}
</script>


<style>

</style>
