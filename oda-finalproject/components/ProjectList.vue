<template>
    <div class="project-list">
            <project-list-item v-for="project in projects" :project="project" :key="project.id">
            </project-list-item>
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