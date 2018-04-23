<template>
        <carousel :perPage=3 :navigationEnabled=true>
            <about-slide v-for="person in people" :person="person" :key="person.name"></about-slide>
        </carousel>
  
</template>

<script>
    import AboutSlide from './AboutSlide';

    export default {
        name: 'about-carousel',
        props: ['people'],
        components: {
            AboutSlide
        },
        methods: {

        }
    };
</script>

<style scoped>
    h2 {
        margin-bottom: 40px;
    }
    ul {
        list-style-type: none;
    }
</style>    