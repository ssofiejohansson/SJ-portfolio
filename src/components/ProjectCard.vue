<template>
  <div class="card-container">
    <h2 class="project-heading">{{ project.name }}</h2>

    <p class="project-text">{{ project.info }}</p>

    <div class="buttons">
      <a
        v-if="project.netlify"
        :href="project.netlify"
        target="_blank"
        rel="noopener noreferrer"
      >
        🌐 Netlify
      </a>
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        💻 GitHub
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
}

.project-heading {
  font-size: 1.75rem;
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
  background: var(--secondary);
  color: var(--primary);
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-style: italic;
  font-size: 14px;
}

.close-button {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--primary);
  color: #FFFFFF;
  border: none;
  font-size: 52px;
  cursor: pointer;
}
</style>
