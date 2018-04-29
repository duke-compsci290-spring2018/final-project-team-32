<template>
<slide class="parent">
    <div class="slide-content" align="center">
        <a :href="link.url"> 
        <div class="image-cropper">
            <img :src="link.image"/>
        </div>
        <h2>{{link.name}}</h2>
        </a>
        <p v-if="$store.state.lang==='eng'">{{link.description}}</p>
        <p v-else>{{link.description_esp}}</p>
    </div>
</slide>

</template>


<script>
import { mapState } from 'vuex'

if (process.browser) {
  require('vue-carousel')
}
export default {
    name: 'why-slide',
    props: ['link'],
}
</script>


<style scoped>
.image-cropper {
    width: 70%;
    height: 130px;
    position: relative;
    overflow: hidden;
/*    border-radius: 50%;*/
}

img {
    display: auto;
    margin: 0 auto;
    height: 100%;
    width: 100%;
}

.slide-content{
    margin: 10px;
}
</style>
