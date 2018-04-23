<template>
<slide>
    <img class="prof-image" :src="person.image"/>
    <h2>{{person.name}}</h2>
    <p>{{person.description}}</p>
</slide>

</template>


<script>
export default {
    name: 'about-slide',
    props: ['person'],
}
</script>


<style scoped>
.prof-image{
    min-height: 40%;
}
</style>
