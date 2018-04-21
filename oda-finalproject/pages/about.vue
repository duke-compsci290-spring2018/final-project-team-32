<template>
<section class="container">
<div id = "carousel-container">
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
</div>
</section>
</template>

<script>
import Carousel from '~/components/carousel/Carousel'
import Slide from '~/components/carousel/Slide'


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
