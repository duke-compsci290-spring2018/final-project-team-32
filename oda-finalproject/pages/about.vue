<template>
<v-app id="inspire">
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
