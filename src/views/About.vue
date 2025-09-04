<template>
  <SplitLayout>
    <template #text>
 
     <p>What started a long time ago with small projects for friends has grown into <i>spending-hours-sometimes-even-full-days</i> with playing around and experimenting with code to create something I find visually appealing.
     </p>

<p>
  In the last few years I have been <a href="https://www.hv.se/utbildning/program/webmaster-heltid-campus-tgwem" target="_blank" rel="noopener noreferrer">studying Web Development</a>, where I explored everything from UX and web design to frontend and backend to databases and CMS platforms. Along the way, I have also squeezed in some freelance work and built <a href="https://novadsdigital.com/" target="_blank" rel="noopener noreferrer">WordPress sites for clients</a>, <a href="https://pgm.se/" target="_blank" rel="noopener noreferrer">collaborated with designers</a> and fully embraced my obsession with CSS.
</p>

<p>When I am not in front of my computer, you will find me hunting for second-hand treasures, attempting (and mostly failing) to master crochet or rediscovering Stockholm with fresh eyes after a decade away.</p>
<Icons/>
    </template>
    <template #background>
   
        <div class="about-background-content">
          <h2>6 random facts</h2>
          <ul>
            <li>🏓 I don't mean to brag, but I'm really good at table tennis.</li>
            <li>🎶 Over 450 concerts attended and still counting.</li>
            <li>🌍 Lived in 10 cities across 4 countries in the last decade.</li>
            <li>🚲 Can't ride a bike, but I'm great at falling down gracefully.</li>
            <li>📸 My biggest dream used to be to become a live concert photographer.</li>
          <li>📚 Currently on a mission to read 52 books this year.</li>
          </ul>
        
      </div>
    </template>
  </SplitLayout>
</template>

<script setup>
import SplitLayout from '../components/SplitLayout.vue'
import Icons from '../components/Icons.vue'
</script>

<style scoped>

.about-background-content {
  text-align: left;
  padding: 40px;
}
</style>
