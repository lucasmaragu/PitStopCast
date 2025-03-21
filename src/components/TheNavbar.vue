<template>
    <nav class="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex-shrink-0 flex items-center">
              <img class="h-10 w-auto" src="/F1-Logo.png"  alt="PitStopCast Logo" />
              <span class="ml-3 text-xl font-bold text-white">PitStopCast</span>
            </router-link>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
            <router-link to="/episodes" class="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Episodios</router-link>
            <router-link to="/production" class="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Producción</router-link>
            <router-link to="/contact" class="text-gray-300 hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contacto</router-link>
          </div>
          <div class="flex md:hidden items-center">
            <button @click="isOpen = !isOpen" class="text-gray-400 hover:text-white focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link to="/" @click="isOpen = false" class="block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium">Home</router-link>
          <router-link to="/episodes" @click="isOpen = false" class="block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium">Episodes</router-link>
          <router-link to="/production" @click="isOpen = false" class="block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium">Production</router-link>
          <router-link to="/contact" @click="isOpen = false" class="block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium">Contact</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  </script>