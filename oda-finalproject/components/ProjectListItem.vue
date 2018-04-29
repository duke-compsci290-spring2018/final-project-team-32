<template>
<v-layout row :id="project.linkName">
    <v-flex fill-height=true xs12>
        <img :src="project.image">
        <h1 class="project-name"><a>{{project.name}}</a></h1>
        <p v-if="$store.state.lang === 'eng'">{{project.description}}</p>
        <p v-else>{{project.description_esp}}</p> 
    </v-flex>
</v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'project-list-item',
    props: ['project'],


}
</script>

<style scoped>
/* .project-list-item img{
    display: block;
    margin: 2%;
} */
    img {
        max-width: 40%;
        float: left;
        width: 20%;
        margin: 2%;
    }
    li {
        display: inline-block;
        width: 90%;
        margin-bottom: 40px;
        clear: both;
    }

    .project-name{
        font-size: 20px;
        font-weight: bold;
    }
</style>