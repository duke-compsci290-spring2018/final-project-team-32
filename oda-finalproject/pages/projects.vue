<template>
  <project-list :projects="theProjects" title="Our Projects (test using outside data)"></project-list>
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
console.log(theProjects);
</script>
