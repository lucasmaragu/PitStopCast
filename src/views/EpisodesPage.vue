<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white">Episodios</h1>
      <div class="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
      <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
        Explora nuestra colección de episodios de podcasts de Fórmula 1. Desde análisis de carreras hasta análisis técnicos profundos, lo tenemos cubierto.</p>
    </div>

    <!-- Filter -->
    <div class="mb-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="relative w-full md:w-64">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Buscar episodio..." 
            class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />
          <svg class="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div class="flex items-center gap-4 w-full md:w-auto">
          <label class="text-gray-300 whitespace-nowrap">Temporada:</label>
          <select 
            v-model="selectedSeason" 
            class="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          >
            <option value="all">Todas las temporadas</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
          
          <label class="text-gray-300 whitespace-nowrap">Ordenar por:</label>
          <select 
            v-model="sortBy" 
            class="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          >
            <option value="newest">Más recientes</option>
            <option value="oldest">Más antiguos</option>
            <option value="popular">Mas populares</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Episodes List -->
    <div class="grid grid-cols-1 gap-8">
      <div v-for="episode in filteredEpisodes" :key="episode.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div class="md:flex">
          <div class="md:w-1/3 lg:w-1/4">
            <img :src="episode.image" :alt="episode.title" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 md:w-2/3 lg:w-3/4">
            <div class="flex flex-col h-full">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-400">{{ formatDate(episode.date) }}</span>
                  <span class="bg-red-600 text-white text-xs px-2 py-1 rounded">{{ episode.season }}</span>
                </div>
                <h2 class="text-xl font-bold text-white mb-2">{{ episode.title }}</h2>
                <p class="text-gray-300 mb-4">{{ episode.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="(tag, index) in episode.tags" :key="index" class="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                    {{ tag }}
                  </span>
                </div>
              </div>
              
              <div class="mt-auto">
                <AudioPlayer :episode="episode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-12 flex justify-center">
      <div class="flex space-x-2">
        <button 
          @click="currentPage > 1 ? currentPage-- : null"
          :class="[
            'px-4 py-2 rounded-md',
            currentPage === 1 
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          ]"
          :disabled="currentPage === 1"
        >
          Anterior
        </button>
        
        <button 
          v-for="page in totalPages" 
          :key="page" 
          @click="currentPage = page"
          :class="[
            'px-4 py-2 rounded-md',
            currentPage === page 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          ]"
        >
          {{ page }}
        </button>
        
        <button 
          @click="currentPage < totalPages ? currentPage++ : null"
          :class="[
            'px-4 py-2 rounded-md',
            currentPage === totalPages 
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          ]"
          :disabled="currentPage === totalPages"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AudioPlayer from '../components/AudioPlayer.vue';

interface Episode {
  id: number;
  title: string;
  date: string;
  image: string;
  audioUrl: string;
  description: string;
  season: string;
  tags: string[];
  popularity: number;
}

// Mock data for episodes
const episodes = ref<Episode[]>([
  {
    id: 1,
    title: "GP de Australia 2025: La victoria de Norris y el caos bajo la lluvia",
    date: "2025-03-16",
    image: "/gp-australia.jpg",
    audioUrl: "/episodes/carrera1.MP3",
    description: "​En este episodio, analizamos el emocionante Gran Premio de Australia 2025, donde Lando Norris logró una impresionante victoria bajo condiciones climáticas desafiantes. Discutimos cómo la lluvia intermitente y las múltiples interrupciones por Safety Car influyeron en la carrera, así como los abandonos notables, incluyendo el de Fernando Alonso. Además, exploramos el rendimiento de McLaren y cómo esta victoria posiciona a Norris en el campeonato mundial.",
    season: "2025",
    tags: ["Revisión de Carrera", "Norris", "Mclaren", "Australia", "Lluvia"],
    popularity: 95
  },
  {
    id: 2,
    title: "GP de China 2025: Piastri lidera el doblete de McLaren en una carrera llena de polémicas",
    date: "2025-05-15",
    image: "/gp-china.webp",
    audioUrl: "/episodes/carrera2.MP3",
    description: "En este episodio, analizamos el Gran Premio de China 2025, donde Oscar Piastri consiguió una victoria dominante desde la pole position, seguido por su compañero Lando Norris, logrando así un impresionante doblete para McLaren. George Russell completó el podio en tercer lugar. Discutimos las controversias que surgieron tras la carrera, incluyendo las descalificaciones de Charles Leclerc y Pierre Gasly por irregularidades en el peso de sus monoplazas, y la de Lewis Hamilton por desgaste excesivo en el patín del suelo de su Ferrari. Además, abordamos el desafortunado abandono de Fernando Alonso debido a problemas en los frenos y cómo estos eventos impactan en el campeonato",
    season: "2025",
    tags: ["Vista previa de Carrera", "Imola", "Ferrari", "Mejoras"],
    popularity: 88
  },
  
]);


// Pagination
const itemsPerPage = 4;
const currentPage = ref(1);

// Filters
const searchQuery = ref('');
const selectedSeason = ref('all');
const sortBy = ref('newest');

const filteredEpisodes = computed(() => {
  let result = [...episodes.value];
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(episode => 
      episode.title.toLowerCase().includes(query) || 
      episode.description.toLowerCase().includes(query) ||
      episode.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  // Filter by season
  if (selectedSeason.value !== 'all') {
    result = result.filter(episode => episode.season === selectedSeason.value);
  }
  
  // Sort
  if (sortBy.value === 'newest') {
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortBy.value === 'oldest') {
    result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (sortBy.value === 'popular') {
    result.sort((a, b) => b.popularity - a.popularity);
  }
  
  // Pagination
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return result.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
  let filteredTotal = episodes.value;
  
  // Apply filters for counting total pages
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filteredTotal = filteredTotal.filter(episode => 
      episode.title.toLowerCase().includes(query) || 
      episode.description.toLowerCase().includes(query) ||
      episode.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  if (selectedSeason.value !== 'all') {
    filteredTotal = filteredTotal.filter(episode => episode.season === selectedSeason.value);
  }
  
  return Math.ceil(filteredTotal.length / itemsPerPage);
});

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>