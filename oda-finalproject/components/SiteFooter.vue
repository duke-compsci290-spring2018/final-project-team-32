<template>
<div id="nav" class="nav">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  OTROS DREAMS EN ACCIÓN IS A BINATIONAL GRASSROOTS COMMUNITY DEDICATED TO MUTUAL SUPPORT AND POLITICAL ACTION BY AND FOR THOSE WHO LIVED IN THE UNITED STATES AND ARE NOW IN MEXICO DUE TO DEPORTATION, THREAT OF DEPORTATION, THE DEPORTATION OF A FAMILY MEMBER, AND/OR OTHER OBSTACLES.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Anytime.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Mexico City</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>odamx2016@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    <v-footer color="blue" app inset>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <span class="white--text">&copy; Sierra, Rikki, Charlotte 2018</span>
      <v-spacer></v-spacer>

      <a href="https://twitter.com/OtrosDreams_ODA" target="blank">
        <v-icon medium color="white">fa-twitter</v-icon>
      </a>
      <v-icon color="white">fa</v-icon>
      <a href="mailto:odamx2016@gmail.com" target="blank">
        <v-icon medium color="white">email</v-icon>
      </a>
      <v-icon color="white">fa</v-icon>
      <a href="https://www.youtube.com/channel/UCfq7vfqdTlESirU6uDIg6Kg" target="blank">
        <v-icon medium color="white">fa-youtube</v-icon>
      </a>
      <v-icon color="white">fa</v-icon>
      <a href="https://www.facebook.com/maggie.loredo.1" target="blank">
        <v-icon medium color="white">fa-facebook</v-icon>
      </a>
      <v-icon color="white">fa</v-icon>

    </v-footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'site-footer',
    data() {
        return {
        }
    }
}
</script>

<style>

</style>
