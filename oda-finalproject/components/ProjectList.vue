<template>
    <div class="project-list">
        <h2 v-if="$store.state.lang === 'eng'">{{title}}</h2>
        <h2 v-else>Nuestros Proyectos</h2>
        <ul>
            <project-list-item v-for="project in projects" :project="project" :key="project.id">
            </project-list-item>
        </ul>
    </div>
</template>

<script>
    import ProjectListItem from './ProjectListItem';

    export default {
        name: 'project-list',
        props: ['projects', 'title'],
        components: {
            'project-list-item': ProjectListItem
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