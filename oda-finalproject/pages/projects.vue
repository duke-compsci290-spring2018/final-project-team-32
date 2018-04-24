<template>
 <v-app id="inspire">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>ODA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/about" flat>About</v-btn>
        <v-btn to="/projects" flat>Projects</v-btn>
        <v-btn to="/donate">Donate</v-btn>
      </v-toolbar-items>
    </v-toolbar>
<div id="content-container">
    <ul class="nav-images">
        <li class="nav-img">
            <a href="#" v-scroll-to="'#project1'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/5824bccc414fb5cc61dd9ec0/1478802639269/?format=1000w" alt="women looking at map">
            </a>
        </li>
        <li class="nav-img">
            <a href="#" v-scroll-to="'#project2'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/58213f6020099e79d2af7277/1478573931736/?format=1000w" alt="women looking at map">
            </a>
        </li>
        <li class="nav-img">
            <a href="#" v-scroll-to="'#project3'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/5824b7f0ff7c501a0fc9ba13/1478801401883/ODA_Return-101-Circle.png?format=1000w" alt="women looking at map">
            </a>
        </li>
        <li class="nav-img">
            <a href="#" v-scroll-to="'#project4'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/5824c76fe6f2e1eac0b6f47f/1478805367347/Almas-Transfronterizas.png?format=1000w" alt="women looking at map">
            </a>
        </li>
    </ul>
  <project-list :projects="theProjects" title="Our Projects"></project-list>
</div>
</v-app>
</template>

<script>
import theProjects from '~/static/data.json';
import ProjectList from '~/components/ProjectList'


export default {
  name: 'app',
  components: {
      ProjectList
  },
  data() {
    return {
      theProjects
    };
  },
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
</style>

