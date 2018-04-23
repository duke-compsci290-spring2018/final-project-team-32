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
                    <carousel :perPage=4 :navigationEnabled=true>
                        <slide>
                            Slide 1 Content
                        </slide>
                        <slide>
                            Slide 2 Content
                        </slide>
                            <slide>
                            Slide 3 Content
                        </slide>
                            <slide>
                            Slide 4 Content
                        </slide>
                            <slide>
                            Slide 5 Content
                        </slide>
                            <slide>
                            Slide 6 Content
                        </slide>
                    </carousel>
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

export default {



  data () {
      return {
      }
  },

  methods: {

  }
}
</script>

<style>

</style>
