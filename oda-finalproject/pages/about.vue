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
    <v-tabs fixed-tabs>
        <v-tab ripple>
            About
        </v-tab>
        <v-tab ripple>
            Media
        </v-tab>
    <v-tab-item>
        <v-card flat>
            <v-card-text>
                <about-carousel :people="thePeople"></about-carousel>
            </v-card-text>
        </v-card>
    </v-tab-item>
    <v-tab-item>
        <v-card flat>
            <v-card-text>Contents for Item 2 go here</v-card-text>
        </v-card>
    </v-tab-item>  
    </v-tabs>
</v-app>
</template>

<script>
import thePeople from '~/static/personData.json';
import AboutCarousel from '~/components/AboutCarousel';
export default {
  components: {
      AboutCarousel
  },

  data() {
    return {
      thePeople
    };
  },

  methods: {

  }
}
</script>

<style>

</style>
