<template>
 <v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-content>
    <v-container grid-list-md>
        <v-layout row justify-space-around>
            <v-flex align-content-space-around=true xs4 v-for="project in projectsTest" :key="project.id">
                    <a href="#" v-scroll-to="'#'+project.linkName">
                        <img :src="project.image" :alt="project.image_title">
                    </a>
            </v-flex>
        </v-layout>
        <v-layout row justify-space-around>
            <h2 v-if="$store.state.lang === 'eng'">Our Projects</h2>
            <h2 v-else>Nuestros Proyectos</h2>
        </v-layout>
        <project-list :projects="projectsTest" title="Our Projects" alt=""></project-list>
        <v-layout row v-if="$store.state.role==='admin'">
            <v-flex xs6>
                <v-form>
                 <h1>Add New Project</h1>
                <v-text-field
                    label="Project Title"
                    v-model="title"
                    required
                ></v-text-field>
                <v-text-field
                    label="Project Description"
                    v-model="description"
                    required
                    multi-line
                    ></v-text-field>
                    <v-text-field
                    label="Project Description in Spanish"
                    v-model="description_esp"
                    required
                    multi-line
                    ></v-text-field>
                <v-text-field
                    label="Image Link"
                    v-model="image"
                    required
                ></v-text-field>
                <v-text-field
                    label="Image Description"
                    v-model="image_title"
                    required
                ></v-text-field>
                <v-btn v-on:click="addProject" color="info">Add Project</v-btn>
                </v-form>
            </v-flex>
            </v-layout>
</v-container>
</v-content>
<site-footer></site-footer>
</v-app>
</template>
<script>
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
import ProjectList from '~/components/ProjectList'
import LangToggle from '~/components/LangToggle'
import { mapState } from 'vuex'
import firebase from '~/services/firebaseApp'
import { projectsRef } from '~/services/firebaseApp'
import axios from 'axios'

// let pRef = firebase.database().ref('projects')
export default {
  name: 'projects',
  asyncData () {
    return axios.get('https://oda-finalproject.firebaseio.com/projects.json')
    .then((res) => {
      return { 
          projectsTest: res.data
       }
    })
  },
  components: {
      SiteHeader,
      SiteFooter,
      ProjectList,
      LangToggle
  },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      image_title: '',
      description_esp: ''
    };
  },
  methods : {
      addProject: function() {
        let self = this
        var myRef = firebase.database().ref().child('projects').push().key
        firebase.database().ref('projects/' + myRef).set({
            name: self.title,
            description: self.description,
            description_esp: self.description_esp,
            image_title: self.image,
            image: self.image,
            linkName: myRef
        })
        this.title='',
        this.description='',
        this.image='',
        this.image_title=''
      },

  }
}
</script>

<style scoped>

ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
img{
    width: 150px;
}
/* #content-container{
    margin: 2%;
} */

</style>
