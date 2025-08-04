<template>
  <div class="projects">
      <ProjectCarousel/>
  </div>

</template>

<script setup>
import ProjectCarousel from '../components/ProjectCarousel.vue';
</script>

<style scoped>
.projects {
  min-height: calc(100vh - 60px);
}
</style>
