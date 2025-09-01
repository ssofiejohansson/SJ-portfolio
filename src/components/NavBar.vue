<template>
  <nav>
    <!-- Hamburger for mobile -->
    <button class="hamburger" @click="menuOpen = !menuOpen">
      {{ menuOpen ? '✕' : '+' }}
    </button>

    <!-- Mobile menu overlay -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <div class="nav-row">
        <router-link v-if="$route.path !== '/'" to="/" @click="menuOpen = false">Home</router-link>
        <router-link to="/about" @click="menuOpen = false">About</router-link>
        <router-link to="/projects" @click="menuOpen = false">Projects</router-link>
        <router-link to="/skills" @click="menuOpen = false">Skills</router-link>
        <router-link to="/contact" @click="menuOpen = false">Contact</router-link>
        <Icons/>
      </div>
    </div>

    <!-- Desktop menu -->
    <div class="desktop-menu">
      <div class="nav-row">
        <router-link v-if="$route.path !== '/'" to="/">←</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import Icons from './Icons.vue'
const menuOpen = ref(false)
</script>

<style scoped>
nav {
  position: relative;
}
.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 2px;
  right: 8px;
  z-index: 2001;
  background: none;
  border: none;
  font-size: 5.5rem;
  color: #1f1f1f;
  cursor: pointer;
  transition: transform 0.2s;
}
.hamburger:active {
  transform: scale(1.15) rotate(20deg);
  outline: none;
}
.hamburger:focus {
  outline: none;
}
.mobile-menu {
  display: none;
  opacity: 0;
  pointer-events: none;
}
.mobile-menu.open {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);
  z-index: 2000;
  transition: opacity 0.3s;
  opacity: 1;
  pointer-events: auto;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 10vw;
}

.mobile-menu.open a {
  transition: transform 0.5s ease;
}

.mobile-menu.open a:hover {
  transform: scale(1.2);
}
.desktop-menu {
  display: none;
}
.nav-row {
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
}
.router-link-exact-active,
.active {
  text-decoration: none;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
  .mobile-menu {
    display: none !important;
  }
  .desktop-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
    background: none;

  }
  .nav-row {
    flex-direction: row;
    width: 100%;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 4.5vw;
    letter-spacing: -0.05em;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    align-items: center;
    flex-wrap: nowrap;

  }

.nav-row a {
  transition: transform 0.5s ease;
}

.nav-row a:hover:not(.router-link-exact-active) {
  transform: scale(1.2);
}

.nav-row .router-link-exact-active {
  transform: scale(1.2);
}

}
</style>
