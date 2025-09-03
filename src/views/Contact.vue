<template>
    <section class="contact">
    <SplitLayout>
      <template #text>
        <h2>So let’s talk frontend, creative chaos or... just play table tennis? 🏓</h2>
   
        <p>
          +46 72 442 34 97
        </p>
        <p> <a href="mailto:ssofiejohansson@gmail.com">ssofiejohansson@gmail.com</a></p>
        <Icons/>
      </template>
      <template #background>
        <div class="contact-background-section">
          <img src="../assets/profile-img-contact.webp" alt="Profile picture of Sofie" class="contact-img" />
        </div>
      </template>
    </SplitLayout>
    
</section>
</template>

<script setup>
import SplitLayout from '../components/SplitLayout.vue'
import Icons from '../components/Icons.vue'
</script>

<style scoped>

.contact {
  position: relative;
}

.contact-background-section {
  width: 100%;
  height: 100%;
}

.contact-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}


@media (max-width: 768px) {

 
}
</style>
