<template>
        <carousel :perPage=3 :navigationEnabled=true>
            <why-slide v-for="link in links" :link="link" :key="link.name">
                
            </why-slide>
        </carousel>
</template>

<script>
    import WhySlide from './whyslide';
    if (process.browser) {
        require('vue-carousel')
    }

    export default {
        name: 'why-carousel',
        props: ['links'],
        components: {
            WhySlide
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