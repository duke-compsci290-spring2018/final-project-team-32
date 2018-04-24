<template>
<v-app id="inspire">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>ODA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/about" flat>About</v-btn>
        <v-btn to="/projects" flat>Projects</v-btn>
        <v-btn to="/donate">Donate</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <sign-up></sign-up>
    <nuxt-link to="/donate">Test auth link</nuxt-link>
</v-app>
</template>

<script>
import SignUp from '~/components/SignUpForm.vue';

export default {
    components : {
        SignUp
    }
  
}
</script>

<style scoped>

</style>
