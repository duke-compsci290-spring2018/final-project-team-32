<template>
<slide class="parent">
    <div class="slide-content" align="center">
        <div class="image-cropper">
            <img :src="person.image"/>
        </div>
        <h2>{{person.name}}</h2>
        <p>{{person.description}}</p>
    </div>
</slide>

</template>


<script>
export default {
    name: 'about-slide',
    props: ['person'],

}
</script>


<style scoped>
.image-cropper {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
}

img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: 100%;
}

.slide-content{
    margin: 10px;
}
</style>
