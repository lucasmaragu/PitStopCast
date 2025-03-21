<template>
  <div>
    <!-- Hero Section -->
    <section class="relative">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
      <div class="relative h-[60vh] overflow-hidden">
        <img src="/formula1-racing.jpg" alt="Formula 1 Racing" class="w-full h-full object-cover" />
      </div>
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <div class="text-center px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight shadow-text">
            PitStop<span class="text-red-600">Cast</span>
          </h1>

          <p class="mt-4 text-xl sm:text-2xl text-white max-w-3xl mx-auto shadow-text">
            Tu destino favorita para noticias, análisis y entrevistas exclusivas de Fórmula 1
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-white mb-6">Sobre PitStopCast</h2>
          <p class="text-gray-300 mb-4 text-lg">
            PitStopCast te trae el contenido más emocionante de Fórmula 1, desde análisis de carreras hasta entrevistas con pilotos y averías técnicas.
          </p>
          <p class="text-gray-300 mb-6 text-lg">
            Presentado por apasionados expertos de la F1 con años de experiencia en el paddock, ofrecemos debates profundos sobre el deporte que todos amamos. Tanto si eres un fan de toda la vida como si eres nuevo en el mundo de la Fórmula 1, nuestro podcast tiene algo para todos.
          </p>
          <div class="flex space-x-4">
            <router-link to="/episodes"
              class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Explorar Episodios
            </router-link>
            <router-link to="/contact"
              class="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Participa
            </router-link>
          </div>
        </div>
        <div class="relative">
          <img alt="PitStopCast Studio" src="/podcast-studio.jpg" class="rounded-lg shadow-xl w-full h-auto" />
          <div class="absolute bottom-6 -right-6 bg-red-600 rounded-lg p-4 shadow-lg hidden md:block">
            <div class="text-white font-bold">
              Nuevos episodios cada fin de semana de carrera
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Episode -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-800 rounded-xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white">Último episodio</h2>
        <div class="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
      </div>

      <AudioPlayer :episode="latestEpisode" />

      <div class="mt-8 text-center">
        <router-link to="/episodes" class="text-red-500 hover:text-red-400 font-medium inline-flex items-center">
          Ver todos los episodios
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white">¿Porqué escuchar PitStopCast?</h2>
        <div class="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-800 p-6 rounded-lg">
          <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Análisis de Experto</h3>
          <p class="text-gray-300">Obtén análisis técnicos detallados y estrategias de carrera de nuestro equipo de expertos en F1...</p>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg">
          <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Entrevistas Exclusivas</h3>
          <p class="text-gray-300">Hear from drivers, team principals, and other key figures in the world of Formula 1.
          </p>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg">
          <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Cobertura del fin de semana de carreras</h3>
          <p class="text-gray-300">Obtén una cobertura completa de cada fin de semana de carreras, desde los entrenamientos libres hasta el análisis posterior a la carrera.</p>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 md:p-12">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Mantente actualizado</h2>
          <p class="text-gray-300 mb-8">Súscribete a nuestro newsletter para tener los ultimos episodios y las últimas noticias directamente en tu correo</p>

          <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Tu correo electrónico"
              class="flex-1 px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500" />
            <button type="submit"
              class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors">
              Suscríbete
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AudioPlayer from '../components/AudioPlayer.vue';

// Mock data for the latest episode
const latestEpisode = ref({
  id: 1,
  title: "Monaco GP Review: Leclerc's Home Victory",
  date: "2023-05-29",
  image: "/episode-cover.jpg",
  audioUrl: "/episodes/monaco-gp-review.mp3",
  description: "Charles Leclerc finally breaks the Monaco curse with a dominant performance in his home race. We analyze the key moments and discuss the championship implications."
});
</script>

<style scoped>
.shadow-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>