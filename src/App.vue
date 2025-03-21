<script setup lang="ts">
  import { onMounted } from 'vue';
  import TheNavbar from './components/TheNavbar.vue';
  import TheFooter from './components/TheFooter.vue';
  
  onMounted(() => {
    document.body.classList.add('bg-gray-900');
  });
  </script>
  
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <TheNavbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>



<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:root {
  --f1-red: #e10600;
  --f1-dark: #15151e;
  --f1-gray: #38383f;
}
</style>