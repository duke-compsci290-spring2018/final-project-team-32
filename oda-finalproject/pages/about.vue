<template>
<h1>About Test</h1>
<!-- <div id = "carousel-container">
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
</div> -->

</template>

<script>
import { Carousel, Slide } from 'vue-carousel';


export default {
  components: {
    Carousel,
    Slide
  },


  data () {
      return {
      }
  },

  methods: {

  }
}
</script>

<style>
#carousel-container{
    color:blue;
}

</style>
