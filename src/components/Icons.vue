<template>
<div class="contact-icons">

    <a href="https://www.linkedin.com/in/ssofiejohansson" target="_blank" rel="noopener noreferrer" title="Visit LinkedIn">
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>

    <a href="https://github.com/ssofiejohansson" target="_blank" rel="noopener noreferrer" title="Visit GitHub">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>

    <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" title="View my CV">
  <font-awesome-icon :icon="['far', 'file-lines']" />
    </a>
  </div>

</template>

<script setup>

</script>

<style scoped>

  .contact-icons {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    margin-top: 10px;
  }
  .contact-icons a {
    color: #1f1f1f;
    font-size: 3rem;
  transition: transform 0.3s ease, color 0.3s ease;
  }
  .contact-icons a:hover {
    transform: scale(1.2);
    color: #F9A8FF;
  }
 

</style>
