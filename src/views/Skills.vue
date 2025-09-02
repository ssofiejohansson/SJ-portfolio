<template>
  <SplitLayout>
    <template #text>
    <div class="skills-grid">
       <TagCloud />
    </div> 
 
    </template>
    <template #background>
   
        <div class="skills-background-content">
          <h2>Tech stack</h2>
          <ul class="tech-list">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JSON</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Vue</li>
            <li>React</li>
            <li>React Native</li>
            <li>Zustand</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>npm</li>
            <li>Yarn</li>
            <li>Postman</li>
            <li>Github</li>
            <li>Git</li>
            <li>Figma</li>
            <li>WordPress</li>
          </ul>
        </div>
    </template>
  </SplitLayout>
</template>

<script setup>
import SplitLayout from '../components/SplitLayout.vue'
import TagCloud from '../components/TagCloud.vue'
</script>

<style scoped>

.skills-background-content {
  text-align: center;
  padding: 40px;
}

.tech-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: center;
  max-width: 800px;
  padding: 10px;
}

.tech-list li {
  font-weight: lighter;
  font-size: 16px;
}

.skills-grid {
  max-width: 700px;
  margin-top: 20px;
}


@media (min-width: 720px) {

.tech-list li {
  font-size: 20px;
}

}

</style>
