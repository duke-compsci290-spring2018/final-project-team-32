<template>
    <li class="project-list-item">
        <img :src="project.image">
        <p class="project-name"><a :id="project.linkName">{{project.name}}</a></p>
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
.project-list-item img{
    display: block;
    margin: 2%;
}
    img {
        max-width: 40%;
        float: left;
        width: 20%;
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