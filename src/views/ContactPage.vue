<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white">Participa con Nosotros</h1>
      <div class="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
      <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
        ¿Tienes alguna pregunta, sugerencia o quieres contribuir al podcast? ¡Nos encantaría saber de ti!
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <div class="bg-gray-800 rounded-lg p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Contáctanos</h2>

          <form @submit.prevent="submitContactForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                <input type="text" id="firstName" v-model="contactForm.firstName"
                  class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                  required />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-300 mb-1">Apellidos</label>
                <input type="text" id="lastName" v-model="contactForm.lastName"
                  class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                  required />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Correo electrónico</label>
              <input type="email" id="email" v-model="contactForm.email"
                class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                required />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-1">Asunto</label>
              <select id="subject" v-model="contactForm.subject"
                class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                required>
                <option value="">Selecciona un asunto</option>
                <option value="general">Consulta general</option>
                <option value="suggestion">Sugerencia de episodio</option>
                <option value="feedback">Comentarios</option>
                <option value="sponsorship">Patrocinio</option>
                <option value="guest">Aparición como invitado</option>
              </select>
            </div>


            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
              <textarea id="message" v-model="contactForm.message" rows="5"
                class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                required></textarea>
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="subscribe" v-model="contactForm.subscribe"
                class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded" />
              <label for="subscribe" class="ml-2 block text-sm text-gray-300">
                Suscríbete a nuestro boletín para recibir actualizaciones y nuevos episodios.
              </label>
            </div>

            <div>
              <button type="submit"
                class="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
                :disabled="isSubmitting">
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else>Enviar Mensaje</span>
              </button>
            </div>
          </form>

          <div v-if="formSubmitted" class="mt-6 p-4 bg-green-800 text-green-100 rounded-md">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.
          </div>
        </div>
      </div>

      <!-- Participation Section -->
      <div>
        <div class="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 class="text-2xl font-bold text-white mb-6">Envía tu grabación</h2>
          <p class="text-gray-300 mb-6">
            ¿Quieres contribuir al podcast? ¡Graba tu pregunta, comentario o comentario sobre la F1 y quizás lo incluyamos en un próximo episodio!
          </p>

          <form @submit.prevent="submitRecordingForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
              <input type="text" id="name" v-model="recordingForm.name"
                class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                required />
            </div>

            <div>
              <label for="recordingEmail" class="block text-sm font-medium text-gray-300 mb-1">Correo electrónico</label>
              <input type="email" id="recordingEmail" v-model="recordingForm.email"
                class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                required />
            </div>

            <div>
              <label for="recordingFile" class="block text-sm font-medium text-gray-300 mb-1">Archivo de Audio (MP3, WAV,
                M4A)</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-400">
                    <label for="file-upload"
                      class="relative cursor-pointer bg-gray-700 rounded-md font-medium text-red-500 hover:text-red-400 focus-within:outline-none">
                      <span>Sube un archivo</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" accept=".mp3,.wav,.m4a"
                        @change="handleFileUpload" />
                    </label>
                    <p class="pl-1">o arrastra y suelta aquí</p>
                  </div>
                  <p class="text-xs text-gray-400">
                    MP3, WAV, or M4A up to 10MB
                  </p>
                </div>
              </div>
              <p v-if="recordingForm.fileName" class="mt-2 text-sm text-gray-300">
                Archivo seleccionado: {{ recordingForm.fileName }}
              </p>
            </div>

            <div>
              <label for="description" class="block text-sm font-medium text-gray-300 mb-1">Descripción</label>
              <textarea id="description" v-model="recordingForm.description" rows="3"
                class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                placeholder="Describe brevemente de qué trata tu grabación." required></textarea>
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="permission" v-model="recordingForm.permission"
                class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded" required />
              <label for="permission" class="ml-2 block text-sm text-gray-300">
                Doy permiso a PitStopCast para usar mi grabación en su podcast.
              </label>
            </div>

            <div>
              <button type="submit"
                class="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
                :disabled="isSubmittingRecording">
                <span v-if="isSubmittingRecording">Subiendo...</span>
                <span v-else>Subir la grabación</span>
              </button>
            </div>
          </form>

          <div v-if="recordingSubmitted" class="mt-6 p-4 bg-green-800 text-green-100 rounded-md">
            Thank you for your submission! If we select your recording for the show, we'll be in touch.
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Conecta con Nosotros</h2>

          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">Email</p>
                <p class="text-sm text-gray-300">contacto@pitstopcast.es</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">Localidad</p>
                <p class="text-sm text-gray-300">Barcelona, España</p>
              </div>
            </div>

            <div class="pt-4">
              <p class="text-sm font-medium text-white mb-3">Síguenos</p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                    </path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                  <span class="sr-only">Instagram</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                  <span class="sr-only">YouTube</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-500 transition-colors">
                  <span class="sr-only">Spotify</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Contact form
const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
  subscribe: false
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const submitContactForm = () => {
  isSubmitting.value = true;

  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;

    // Reset form
    contactForm.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      subscribe: false
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  }, 1500);
};

// Recording submission form
const recordingForm = ref({
  name: '',
  email: '',
  file: null as File | null,
  fileName: '',
  description: '',
  permission: false
});

const isSubmittingRecording = ref(false);
const recordingSubmitted = ref(false);

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    recordingForm.value.file = target.files[0];
    recordingForm.value.fileName = target.files[0].name;
  }
};

const submitRecordingForm = () => {
  isSubmittingRecording.value = true;

  // Simulate form submission
  setTimeout(() => {
    isSubmittingRecording.value = false;
    recordingSubmitted.value = true;

    // Reset form
    recordingForm.value = {
      name: '',
      email: '',
      file: null,
      fileName: '',
      description: '',
      permission: false
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      recordingSubmitted.value = false;
    }, 5000);
  }, 1500);
};
</script>