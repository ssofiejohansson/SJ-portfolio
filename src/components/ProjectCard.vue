<template>
  <div class="card-container">
    <div class="card-header">
    <h2 class="project-heading">{{ project.name }}</h2>
    <img
      v-if="project.technigoProject"
      src="/img/technigo-logo.webp"
      alt="Technigo project logo"
      class="school-logo"
    />
  </div>

    <p class="project-text">{{ project.info }}</p>

    <div class="buttons">
      <a
        v-if="project.live"
        :href="project.live"
        target="_blank"
        rel="noopener noreferrer"
      >
    🌐 View Live
      </a>
      <a
        v-if="project.code"
        :href="project.code"
        target="_blank"
        rel="noopener noreferrer"
      >
       💻 GitHub Repo
      </a>
      
    </div>

    <div class="tag-container">
      <span>This was a</span>
      <span>{{ project.collab }}</span>
      <span>with focus on:</span>
      <span
        v-for="(tag, index) in project.tags"
        :key="index"
      >
        {{ tag }}<span v-if="index < project.tags.length - 1">,</span>
      </span>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: Object
})

const popupProject = ref(null)
</script>

<style scoped>
.card-container {
  background-color: #FFFFFF;
  padding: 20px;
  max-width: 400px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  /* margin-bottom: 20px; */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
}

.school-logo {
  width: 40px;
  height: auto;
  flex-shrink: 0;
}

.project-heading {
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.project-text {
  font-size: 0.95rem;
  line-height: 1.5;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
/* 
.buttons a,
.buttons button {
  font-size: 15px;
  padding: 6px;
  background: var(--primary);
  color: var(--secondary);
  border: none;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.buttons a:hover,
.buttons button:hover {

} */

.buttons a,
.buttons button {
  font-size: 14px;
  padding: 6px 12px;
  background: var(--primary);
  color: var(--secondary);
  border: none;
  text-decoration: none;
  font-weight: 400;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
}

/* Hover effect */
.buttons a:hover,
.buttons button:hover {
  font-weight: 600;
  background: var(--secondary);
  color: var(--primary);

}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-style: italic;
  font-size: 13px;
}

</style>
