<template>
  <section class="home">
    <SplitLayout>
      <template #text>
        <h2>🪩 Hej! Hallå!</h2>
        <p>I am a creative frontend developer with a love for colors, clean code and CSS (yes, really). For the past decade I have lived in 10 different cities and soaked up all I could from life, cultures and people while working in hospitality. But I have always had this itch about wanting to use my creativity somehow and now I can do that with code.
        </p>
        <p>Right now I am deep into JavaScript, React and building very cool things at <a href="https://www.technigo.io/" target="_blank">Technigo</a> — and honestly, I am loving it. Currently looking for a frontend role where I can keep growing, build more cool stuff and bring some positive energy to a team.</p>

      <Icons/>
      </template>
      <template #background>
        <div class="home-background-section">
          <img src="../assets/profile-img.webp" alt="Profile picture of Sofie" class="profile-img" />
        </div>
      </template>
    </SplitLayout>
    <div class="scrolling-banner">
      <div class="banner-track">
        <span class="banner-text">Sofie Johansson Frontend Developer</span>
        <span class="banner-text clone">Sofie Johansson Frontend Developer</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import SplitLayout from '../components/SplitLayout.vue'
import Icons from '../components/Icons.vue'
</script>

<style scoped>
.home {
  position: relative;
}

.home-background-section {
  width: 100%;
  height: 100%;
}

.profile-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}

.scrolling-banner {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
}

.banner-track {
  display: flex;
  gap: 10px;
  width: max-content;
  animation: seamlessScroll 18s linear infinite;
}

.banner-text {
  display: inline-block;
  font-size: 5vw;
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes seamlessScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {

  .banner-text {
    font-size: 5vw;
  }
}
</style>
