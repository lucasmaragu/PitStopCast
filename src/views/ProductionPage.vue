<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white">Detrás de las cámaras</h1>
        <div class="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
          Descubre cómo creamos PitStopCast, desde la grabación hasta la edición y publicación.
        </p>
      </div>
  
      <!-- Studio Section -->
      <section class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-white mb-6">Nuestro setup del estudio</h2>
            <p class="text-gray-300 mb-4">
              PitStopCast se graba en nuestro estudio, diseñado específicamente para la producción de podcasts. Hemos invertido en equipos de calidad profesional para garantizar la máxima calidad de audio para nuestros oyentes.
            </p>
            <p class="text-gray-300 mb-6">
              Nuestra sala de grabación insonorizada elimina el ruido de fondo y el eco, creando un sonido limpio y profesional que pone el foco en nuestros análisis y discusiones.
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Sala de grabación tratada acústicamente
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Múltiples estaciones de grabación para anfitriones e invitados.
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Capacidad para invitados remotos con conexiones con calidad de transmisión
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Sala de control dedicada para nuestro ingeniero de audio
              </li>
            </ul>
          </div>
          <div class="relative">
            <img 
              src="/podcast-studio.jpg" 
              alt="PitStopCast Studio" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
            <div class="absolute -bottom-6 -left-6 bg-red-600 rounded-lg p-4 shadow-lg hidden md:block">
              <div class="text-white font-bold">
                Equipo de calidad profesional
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Equipment Section -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Nuestro equipamiento</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Micrófonos</h3>
            <ul class="text-gray-300 space-y-2">
              <li>Shure SM7B Vocal</li>
              <li>Electro-Voice RE20 Broadcast</li>
              <li>Rode PodMic Podcasting</li>
              <li>Shure MV7 USB/XLR Hybrid</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Interfaz de Audio</h3>
            <ul class="text-gray-300 space-y-2">
              <li>RØDECaster Pro II Integrated Podcast Console</li>
              <li>Universal Audio Apollo x8 Interface</li>
              <li>Focusrite Scarlett 18i20 3rd Gen</li>
              <li>Cloudlifter CL-1 Mic Activator</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Ordenadores y Software</h3>
            <ul class="text-gray-300 space-y-2">
              <li>Mac Studio with M1 Max</li>
              <li>Adobe Audition CC</li>
              <li>Logic Pro X</li>
              <li>iZotope RX 9 Advanced</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Monitoreo</h3>
            <ul class="text-gray-300 space-y-2">
              <li>Beyerdynamic DT 770 PRO Headphones</li>
              <li>Sony MDR-7506 Professional Headphones</li>
              <li>Yamaha HS8 Studio Monitors</li>
              <li>PreSonus Eris E5 XT Monitors</li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Production Process -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Nuestro proceso de Producción</h2>
        
        <div class="relative">
          <!-- Process Timeline -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
          
          <div class="space-y-12">
            <!-- Step 1 -->
            <div class="relative md:flex items-center">
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 z-10"></div>
              <div class="md:w-1/2 md:pr-12 md:text-right">
                <div class="bg-gray-800 p-6 rounded-lg inline-block">
                  <h3 class="text-xl font-bold text-white mb-2">1. Pre-Producción</h3>
                  <p class="text-gray-300">
                    Nuestro equipo investiga temas, prepara los puntos de conversación y programa la programación de invitados. Creamos un esquema detallado del episodio para asegurarnos de cubrir todos los aspectos importantes del tema.
                  </p>
                </div>
              </div>
              <div class="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            
            <!-- Step 2 -->
            <div class="relative md:flex items-center">
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 z-10"></div>
              <div class="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div class="md:w-1/2 md:pl-12">
                <div class="bg-gray-800 p-6 rounded-lg inline-block">
                  <h3 class="text-xl font-bold text-white mb-2">2. Grabación</h3>
                  <p class="text-gray-300">
                    Nosotros grabamos cada episodio en un estudio profesional. Para nuestros invitados, usamos software dedicado por su gran calidad de audio. Cada participamente es grabado en una pista separada para optimizar el control de edición. 
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="relative md:flex items-center">
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 z-10"></div>
              <div class="md:w-1/2 md:pr-12 md:text-right">
                <div class="bg-gray-800 p-6 rounded-lg inline-block">
                  <h3 class="text-xl font-bold text-white mb-2">3. Edición</h3>
                  <p class="text-gray-300">
                    Nuestros ingenieros de audio limpian las grabaciones, eliminan el audio de fondo y balancean los niveles de audio. Nosotrs editamos por el flujo de contenido, eliminando las pausas innecesarias y tangentes mientras preservamos la conversación natural.
                  </p>
                </div>
              </div>
              <div class="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
            
            <!-- Step 4 -->
            <div class="relative md:flex items-center">
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 z-10"></div>
              <div class="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div class="md:w-1/2 md:pl-12">
                <div class="bg-gray-800 p-6 rounded-lg inline-block">
                  <h3 class="text-xl font-bold text-white mb-2">4. Post-Producción</h3>
                  <p class="text-gray-300">
                    Añadimos música de introducción y de final, efectos de sonido, y aplicamos compresión y EQ para asegurar una consistencia de calidad de audio. Nuestro equipo también crea notas del programa y marcas de tiempo para los puntos clave de discusión. 
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Step 5 -->
            <div class="relative md:flex items-center">
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 z-10"></div>
              <div class="md:w-1/2 md:pr-12 md:text-right">
                <div class="bg-gray-800 p-6 rounded-lg inline-block">
                  <h3 class="text-xl font-bold text-white mb-2">5. Publicación</h3>
                  <p class="text-gray-300">
                    Distribuimos el episodio a través de todas las plataformas más exitosas, actualizamos nuestra página web, y promocionamos el episodio en las redes sociales con clips editados.
                  </p>
                </div>
              </div>
              <div class="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Software Tools -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Herramientas de Software que utilizamos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-800 rounded-lg  p-6">
            <div class="flex justify-center">
            <img src="/audacity-icon.avif" alt="Audacity" class="h-40 mb-4" />
          </div>
            <h3 class="text-xl font-bold text-white mb-2">Audacity</h3>
            <p class="text-gray-300 mb-4">
              Usamos Audiacity para la grabación inicial y la edición básica. Es un potente editor de audio de código abierto que nos permite capturar grabaciones de alta calidad.
            </p>
            <ul class="text-gray-300 space-y-1">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Grabación multipista
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Reducción de ruido
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Efectos básicos y procesamiento.
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex justify-center">
            <img src="/adobe-audition-icon.png" alt="Adobe Audition" class="h-40 mb-4" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Adobe Audition</h3>
            <p class="text-gray-300 mb-4">
              Para edición y mezcla avanzadas, utilizamos Adobe Audition. Sus potentes funciones nos permiten lograr un sonido de calidad profesional.
            </p>
            <ul class="text-gray-300 space-y-1">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Edición de frecuencia espectral
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Edición multipista avanzada
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Efectos profesionales y herramientas de masterización
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-800 rounded-lg p-6">
            <div class="flex justify-center">
            <img src="/ffmpeg-logo.png"  alt="FFmpeg" class="h-40 mb-4" />
          </div>
            <h3 class="text-xl font-bold text-white mb-2">FFmpeg</h3>
            <p class="text-gray-300 mb-4">
              Usamos FFmpeg para la conversión, compresión y procesamiento por lotes de audio. Nos ayuda a preparar archivos para diferentes plataformas de distribución.
            </p>
            <ul class="text-gray-300 space-y-1">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Conversión de formato
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Compresión de audio
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Procesamiento por lotes de múltiples archivos
              </li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section>
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 md:p-12 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">¿Interesado/a en nuestro proceso de producción?</h2>
          <p class="text-gray-300 mb-8 max-w-3xl mx-auto">
            ¿Quieres saber más sobre la producción de podcasts o tienes preguntas sobre nuestra configuración? Nos encantaría compartir nuestros conocimientos y experiencia.
          </p>
          <router-link to="/contact" class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
            Contáctanos
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
