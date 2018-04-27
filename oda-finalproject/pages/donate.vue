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
    <div id="content-container">
    <v-flex v-if="$store.state.role ==='user'" xs12 :align-content-center="true" :align-center="true">
        <h1>Donate</h1>
        <p>{{lorem}}</p>
    </v-flex>
    <v-flex v-if="$store.state.role ==='guest'" xs12>
        <login-form></login-form>
    </v-flex>
    </div>
</v-app>
</template>


<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  data () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
      }
    },
    components: {
        LoginForm
    }
}
</script>


<style>
#content-container{
    margin: 2%;
}
</style>
