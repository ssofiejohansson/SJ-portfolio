<template>
  <div class="split-layout">
    <section class="text-section">
      <div class="text-content">
        <slot name="text" />
      </div>
    </section> 
    <section class="background-section">
      <slot name="background" />
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
.split-layout {
  display: flex;
  flex-direction: row;
  min-height: 100dvh;
}

.background-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #FFF4B8, #FFC7D3, #F9A8FF);
}

.text-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
}

.text-content {
  text-align: left;
  margin: 0 auto;
  padding: 40px;
}

@media (max-width: 768px) {
  .split-layout {
    flex-direction: column-reverse;
  }
  .background-section {
    min-height: 400px;
  }
  .text-content {
    padding: 20px;
    margin-bottom: 10px;
  }
}
</style>
