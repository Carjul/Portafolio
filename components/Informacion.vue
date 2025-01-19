<script setup>
defineProps({
    isDarkMode: {
    type: Boolean,
    required: true,
  },
  toggleTheme:{
    type: Function,
    required: true,
  }
  
})
</script>
<template>
<main
        :class="isDarkMode ? 'flex flex-col items-center bg-gradient-to-r from-blue-500 to-green-500 to-pink-500 w-full mb-5 transition-all duration-300 ease-in-out' : 'flex flex-col items-center bg-gradient-to-r from-yellow-500 to-blue-500 w-full mb-5 transition-all duration-300 ease-in-out '">
        <section class="flex flex-col">
            <nav class="mt-10 flex items-center">
                <ul class="flex items-center flex-wrap">
                    <h1 class="font-burtons text-xl text-base-100 mx-5">Portafolio Web</h1>

                    <li>
                        <a class="bg-primary from-cyan-500 text-to-teal-500 text-white px-2 py-2 border-none rounded-md ml-8 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-primary"
                            href="https://www.linkedin.com/in/carlos-juli%C3%A1n-ramos/" target="_blank">
                            Resumen
                        </a>
                    </li>

                    <li class="mx-5">
                        <a class="text-xl text-base-100 hover:cursor-pointer hover:text-primary"
                            href="#proyectos">Proyectos</a>
                    </li>
                    <li class="mx-5">
                        <a class="text-xl text-base-100 hover:cursor-pointer hover:text-primary"
                            href="#skills">Habilidades</a>
                    </li>
                    <li class="mx-5">
                        <a class="text-xl text-base-100 hover:cursor-pointer hover:text-primary"
                            href="#contact">Contacto</a>
                    </li>
                    <li>
                        <label class="swap swap-rotate">

                            <input type="checkbox" @change="toggleTheme" :checked="isDarkMode" />

                            <svg class="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                            <svg class="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </li>
                    <li class="mx-5">
                        <a href="https://github.com/Carjul" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                class="fill-current">
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.2c-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.806 1.305 3.492.997.108-.775.42-1.306.763-1.607-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.495 11.495 0 0 1 3.006-.404c1.02.004 2.044.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.622-5.476 5.92.43.37.823 1.102.823 2.222v3.293c0 .319.22.694.824.576C20.565 21.798 24 17.3 24 12 24 5.37 18.63 0 12 0z">
                                </path>
                            </svg>
                        </a>
                    </li>

                </ul>
            </nav>
        </section>
        <section class="pb-2 text-neutral-content">
            <div class="flex flex-col items-center text-center p-10 py-10">
                <h2 class="text-2xl py-2 text-base-100 md:text-3xl">
                    Carlos Julián Ramos González
                </h2>
                <h3 class="text-2xl py-7 md:text-3xl text-base-100 ">
                    Desarrollador Web
                </h3>


                <div
                    class="mx-auto rounded-full w-60 h-60 hover: transition-transform transform hover:scale-110 duration-500 ease-in-out mx-auto overflow-hidden mt-39 md:h-96 md:w-96">
                    <NuxtImg src="/img/profile.jpg"
                        loading="lazy" class="object-cover w-full h-full" />
                </div>
                <p class="text-md py-5 leading-8 max-w-x mx-auto md:text-xl text-base-100 ">
                    Soy un desarrollador web full-stack con experiencia en tecnologías como React.js, Vue.js, Node.js,
                    Nest.js, Go y bases de datos SQL/NoSQL. Me especializo en crear interfaces intuitivas y escalables,
                    optimizando la experiencia del usuario con un enfoque en diseño responsive y rendimiento web. Lo que
                    me apasiona como desarrollador es la oportunidad de resolver problemas complejos a través de
                    soluciones creativas y eficientes, especialmente en trabajos de backend. Aprendo constantemente
                    nuevas herramientas y tecnologías para estar a la vanguardia del desarrollo web.
                </p>
            </div>
        </section>
    </main>
</template>