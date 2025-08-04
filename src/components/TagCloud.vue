<template>
  <div class="tag-cloud">
    <span
      v-for="(tag, index) in randomizedTags"
      :key="index"
      :style="tag.style"
      class="tag"
    >
      {{ tag.text }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skills = [
  "Responsive design",
  "Styled components",
  "Web accessibility",
  "Accessibility testing tools",
  "State management",
  "Debugging",
  "Performance optimization",
  "Component-based architecture",
  "Client-side routing",
  "UX/UI",
  "Wireframing",
  "Prototyping in Figma",
  "Agile development",
  "Sprint planning",
  "Code reviews",
  "Pair & mob programming",
  "Git/GitHub workflows",
  "Team collaboration",
  "Attention to detail",
  "User-centric thinking"
];

const randomizedTags = ref([])

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function randomizeTags() {
  return skills.map(tag => {
    const min = 1.2 // rem
    const max = 1.8 // rem
    const randomFactor = Math.random() * (max - min) + min
    const fontWeight = [400, 500, 600, 700, 800][Math.floor(Math.random() * 5)]

    return {
      text: tag,
      style: {
        fontSize: `clamp(${min}rem, ${randomFactor}vw, ${max}rem)`,
        fontWeight
      }
    }
  })
}

onMounted(() => {
  randomizedTags.value = shuffleArray(randomizeTags())
})
</script>

<style scoped>
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.tag {
  font-family: 'Futura', Helvetica, sans-serif;
}

</style>
