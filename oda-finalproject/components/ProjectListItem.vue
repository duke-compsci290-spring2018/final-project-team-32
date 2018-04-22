<template>
    <li>
        <img :src="project.image">
        <p><strong>{{project.name}}</strong></p>
        <p>{{project.description}}</p>
    </li>
</template>

<script>
export default {
    name: 'project-list-item',
    props: ['project'],

    data: () => ({
    }),
}
</script>

<style scoped>
    img {
        float: left;
        width: 300px;
    }
    li {
        margin-bottom: 40px;
        clear: both;
    }
</style>