<template>
    <v-toolbar>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
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
import { mapState } from 'vuex'

export default {
    name: 'site-header',
    data() {
        return {

        }
    }

}
</script>


<style>

</style>
