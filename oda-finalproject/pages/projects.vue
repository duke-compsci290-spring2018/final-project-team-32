<template>
 <v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-content>
        <v-container fluid grid-list-xl>
    <v-layout justify-space-around>
<!-- <div id="content-container"> -->
    <ul class="nav-images">
        <v-flex xs4 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74ZplvyrrpuZWG0j6'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/5824bccc414fb5cc61dd9ec0/1478802639269/?format=1000w" alt="women looking at map">
            </a>
        </v-flex>
        <v-flex xs4 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74o9dJC3dpk1TW7lp'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/58213f6020099e79d2af7277/1478573931736/?format=1000w" alt="women looking at map">
            </a>
        </v-flex>
        <v-flex xs4 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74vjFL1tl0GDKMprJ'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/5824b7f0ff7c501a0fc9ba13/1478801401883/ODA_Return-101-Circle.png?format=1000w" alt="women looking at map">
            </a>
        </v-flex>
        <v-flex xs4 class="nav-img">
            <a href="#" v-scroll-to="'#-LB751f5yvYSUPahtRKF'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/5824c76fe6f2e1eac0b6f47f/1478805367347/Almas-Transfronterizas.png?format=1000w" alt="women looking at map">
            </a>
        </v-flex>
    </ul>
    </v-layout>
  <project-list :projects="projectsTest" title="Our Projects"></project-list>
              <v-layout v-if="$store.state.role ==='admin'" justify-space-around>
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
            </v-layout>
</v-container>
</v-content>
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
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
      return { projectsTest: res.data }
    })
  },
  components: {
      SiteHeader,
      ProjectList,
      LangToggle
  },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      image_title: '',
    };
  },
  methods : {
      addProject: function() {
        let self = this
        var myRef = firebase.database().ref().child('projects').push().key
        firebase.database().ref('projects/' + myRef).set({
            name: self.title,
            description: self.description,
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
.nav-img img{
    width: 150px;
}
#content-container{
    margin: 2%;
}

</style>

