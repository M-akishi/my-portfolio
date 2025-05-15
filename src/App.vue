<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div id="app" class="app-container">
    <NavBar />
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  background-color: #000;
  width: 100%;
  height: 100%;
  color: white;
  font-family: 'Courier New', monospace;
}
</style>
