<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
/* 阻止弹出菜单 */
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
:global(*) {
  margin: 0;
  padding: 0;
  user-select: none;
}
:global(body){
  padding:0 1vw;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}







</style>
