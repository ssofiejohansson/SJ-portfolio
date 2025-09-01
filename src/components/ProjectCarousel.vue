<template>

  <div class="carousel-wrapper">
  <Swiper
    :modules="[Navigation, Pagination]"
    :slides-per-view="1"
    :space-between="25"
    :breakpoints="{
    640: { slidesPerView: 1 },   // small tablet
  768: { slidesPerView: 2 },   // tablet
  1024: { slidesPerView: 3 },  // small laptop
  1280: { slidesPerView: 4 }   // desktop
    }"
    navigation
    pagination
    class="project-carousel"
  >
  <SwiperSlide v-for="(project, index) in projects" :key="index">
  <ProjectCard :project="project" />
</SwiperSlide>
  </Swiper>

    </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ProjectCard from './ProjectCard.vue'
import projectData from '../assets/data/projects.json'

const projects = projectData.projects
</script>

<style scoped>

.project-carousel {
  width: 100%;
  padding: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-wrapper {
  width: 100%;
  margin: 0 auto;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

</style>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #F9A8FF;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, transform 0.2s;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  transform: scale(1.2);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 30px;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  transition: all 0.3s;
}

.swiper-pagination-bullet-active {
  background-color: #FFF4B8;
  opacity: 1;
  transform: scale(1.5);
}

</style>