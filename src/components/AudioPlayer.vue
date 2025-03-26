<template>
    <div class="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div class="flex items-center mb-4">
        <img :src="episode.image" :alt="episode.title" class="w-16 h-16 rounded-md object-cover mr-4" />
        <div>
          <h3 class="text-white font-bold">{{ episode.title }}</h3>
          <p class="text-gray-400 text-sm">{{ formatDate(episode.date) }}</p>
        </div>
      </div>
      <div class="space-y-3">
      
        <audio ref="audioPlayer" class="w-full" :src="episode.audioUrl" preload="metadata"></audio>
        
        <div class="flex items-center space-x-2">
          <button @click="togglePlay" class="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 focus:outline-none">
            <svg v-if="!isPlaying" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          <div class="text-gray-400 text-sm w-16">{{ formatTime(currentTime) }}</div>
          
          <div class="relative flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div class="absolute inset-y-0 left-0 bg-red-600 rounded-full" :style="{ width: `${progress}%` }"></div>
            <input 
              type="range" 
              min="0" 
              :max="duration" 
              step="0.01" 
              v-model="currentTime"
              @input="seek"
              class="absolute inset-0 w-full opacity-0 cursor-pointer"
            />
          </div>
          
          <div class="text-gray-400 text-sm w-16 text-right">{{ formatTime(duration) }}</div>
          
          <button @click="toggleMute" class="text-gray-400 hover:text-white focus:outline-none">
            <svg v-if="!isMuted" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
  
  interface Episode {
    id: number;
    title: string;
    date: string;
    image: string;
    audioUrl: string;
    description: string;
  }
  
  const props = defineProps<{
    episode: Episode;
  }>();
  
  const audioPlayer = ref<HTMLAudioElement | null>(null);
  const isPlaying = ref(false);
  const isMuted = ref(false);
  const duration = ref(0);
  const currentTime = ref(0);
  
  const progress = computed(() => {
    return duration.value ? (currentTime.value / duration.value) * 100 : 0;
  });
  
  const togglePlay = () => {
    if (!audioPlayer.value) return;
    
    if (isPlaying.value) {
      audioPlayer.value.pause();
    } else {
      audioPlayer.value.play();
    }
    isPlaying.value = !isPlaying.value;
  };
  
  const toggleMute = () => {
    if (!audioPlayer.value) return;
    
    audioPlayer.value.muted = !audioPlayer.value.muted;
    isMuted.value = audioPlayer.value.muted;
  };
  
  const seek = () => {
    if (!audioPlayer.value) return;
    audioPlayer.value.currentTime = currentTime.value;
  };
  
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const updateTime = () => {
    if (!audioPlayer.value) return;
    currentTime.value = audioPlayer.value.currentTime;
  };
  
  onMounted(() => {
    if (!audioPlayer.value) return;
    
    audioPlayer.value.addEventListener('loadedmetadata', () => {
      duration.value = audioPlayer.value?.duration || 0;
    });
    
    audioPlayer.value.addEventListener('timeupdate', updateTime);
    
    audioPlayer.value.addEventListener('ended', () => {
      isPlaying.value = false;
      currentTime.value = 0;
    });
  });
  
  onUnmounted(() => {
    if (!audioPlayer.value) return;
    audioPlayer.value.removeEventListener('timeupdate', updateTime);
  });
  
  watch(() => props.episode, () => {
    if (isPlaying.value && audioPlayer.value) {
      audioPlayer.value.pause();
      isPlaying.value = false;
    }
    currentTime.value = 0;
    
    // Need to wait for the audio element to update its source
    setTimeout(() => {
      if (audioPlayer.value) {
        audioPlayer.value.load();
      }
    }, 0);
  });
  </script>