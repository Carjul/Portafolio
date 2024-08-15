<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const getDataWithRetry = async (url) => {
    let response;
    while (true) {
        try {
            response = await axios.get(url);
            if (response.status !== 500) {
                break;
            }
        } catch (error) {
            if (error.response && error.response.status !== 500) {
                break;
            }
        }
        // Espera un segundo antes de intentar de nuevo
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return response ? response.data : [];
};

const getskills = () => getDataWithRetry('/api/skills/read');
const getprojects = () => getDataWithRetry('/api/projects/read');
//-----------------------------------------------------------------------------
const currentPageSkill= ref(1);
const itemsPerPageSkill= ref(3);
const skills = ref([]);
const projects = ref([]);

const totalPageSkill = computed(() => {
    return Math.ceil(skills.value.length / itemsPerPageSkill.value);
});

const paginatedSkills = computed (() => {
    const from = (currentPageSkill.value - 1) * itemsPerPageSkill.value;
    const to = from + itemsPerPageSkill.value;
    return skills.value.slice(from, to);
});

function prevPageskill() {
      if (currentPageSkill.value > 1) {
        currentPageSkill.value--;
      }
    }
function nextPageskill() {
    console.log(totalPageSkill);
      if (currentPageSkill.value < totalPageSkill.value) {
        currentPageSkill.value++;
      }
    }
    
onMounted(async () => {
    skills.value = await getskills();
    projects.value = await getprojects();
});

//-----------------------------------------------------------------------------
// Referencias y lógica de paginación para proyectos
const currentPageProject = ref(1);
const itemsPerPageProject = ref(3);


// Cálculo del total de páginas para proyectos
const totalPageProject = computed(() => {
    return Math.ceil(projects.value.length / itemsPerPageProject.value);
});

// Proyectos paginados
const paginatedProjects = computed(() => {
    const from = (currentPageProject.value - 1) * itemsPerPageProject.value;
    const to = from + itemsPerPageProject.value;
    return projects.value.slice(from, to);
});

// Funciones de navegación para la paginación de proyectos
function prevPageProject() {
    if (currentPageProject.value > 1) {
        currentPageProject.value--;
    }
}
function nextPageProject() {
    if (currentPageProject.value < totalPageProject.value) {
        currentPageProject.value++;
    }
}

</script>

<template>
 <main class="flex flex-col items-center bg-gradient-to-r from-blue-500 to-green-500 to-pink-500 w-full transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:via-purple-500">
    <section class="flex flex-col">
        <nav class="mt-10 flex items-center">
            <h1 class="font-burtons text-xl text-neutral-content">Developed by</h1>
            <ul class="flex items-center">
                <li>
                    <a class="bg-primary from-cyan-500 text-to-teal-500 text-white px-2 py-2 border-none rounded-md ml-8 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500"
                       href="https://www.linkedin.com/in/carlos-juli%C3%A1n-ramos/" target="_blank">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </section>
    <section class="pb-2 text-neutral-content">
        <div class="flex flex-col items-center text-center p-10 py-10">
            <h2 class="text-2xl py-2 md:text-3xl text-neutral-content">
                Carlos Julian Ramos González
            </h2>
            <h3 class="text-2xl py-2 md:text-3xl text-neutral-content">
                Developer Web
            </h3>
            <p class="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl text-neutral-content">
            </p>
            
            <div class="mx-auto rounded-full w-60 h-60 hover:border transition-transform transform hover:scale-110 duration-500 ease-in-out mx-auto overflow-hidden mt-39 md:h-96 md:w-96">
                <img src="https://res.cloudinary.com/dim2wnoej/image/upload/v1723646127/7_josy58.jpg" class="object-cover w-full h-full" />
            </div>
            <p class="text-md py-5 leading-8 max-w-x mx-auto md:text-xl text-neutral-content">
                Soy un desarrollador full-stack con experiencia en tecnologías como Vue.js, Node.js, y bases de datos SQL/NoSQL. Me especializo en crear interfaces intuitivas y escalables, optimizando la experiencia del usuario con un enfoque en diseño responsive y rendimiento web. Lo que me apasiona como desarrollador es la oportunidad de resolver problemas complejos a través de soluciones creativas y eficientes, mientras aprendo constantemente nuevas herramientas y tecnologías para estar a la vanguardia del desarrollo web.
            </p>
        </div>
    </section>
</main>
    <br>
    <h1>Skillset</h1>
    <br>
    <section class="mx-auto ml-5 mr-5 bg-base-200 px-4">
    <div v-for="(skill, index) in paginatedSkills" :key="index" class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure>
        <img :src="skill.image" alt="Skill Image" loading="lazy" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ skill.title }}</h2>
        <p>{{ skill.description }}</p>
      </div>
    </div>

  </section>
  <div class="flex justify-center items-center mt-4">
      <button @click="prevPageskill" :disabled="currentPageSkill === 1" class="btn btn-primary mr-4"><</button>
      <span>{{ currentPageSkill }} / {{ totalPageSkill }}</span>
      <button @click="nextPageskill" :disabled="currentPageSkill === totalPageSkill" class="btn btn-primary ml-4">></button>
    </div>

     <br>
    <h1>Projects</h1>
    <br>
    <section class="mx-auto ml-5 mr-5 bg-base-200 px-4">
        <div v-for="(project, index) in paginatedProjects" :key="index" class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
            <a :href="project.url" target="_blank" rel="noopener noreferrer">
                <figure>
                    <img :src="project.image" alt="Project Image" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ project.name }}</h2>
                    <p>{{ project.description }}</p>
                </div>
            </a>
        </div>
    </section>
    <div class="flex justify-center items-center mt-4">
        <button @click="prevPageProject" :disabled="currentPageProject === 1" class="btn btn-primary mr-4"><</button>
        <span>{{ currentPageProject }} / {{ totalPageProject }}</span>
        <button @click="nextPageProject" :disabled="currentPageProject === totalPageProject" class="btn btn-primary ml-4">></button>
    </div>
   <!--  <br>
    <h1>CV</h1>
    <br>
    <section class="mx-auto ml-5 mr-5 bg-base-200 px-4 mb-10">
        <iframe src="https://drive.google.com/file/d/1epcJ9IIWkNc2SsZCDHgQEZpeRtoYLtuT/view?usp=drivesdk" frameborder="0" width="70%" height="100%"></iframe>
    </section> -->
    <br>
    <h1>Contact</h1>
    <br>
    <section class="mx-auto ml-5 mr-5 bg-base-200 px-4 mb-10">
        <ContactForm />
    </section>
    
    <Footercomponet />
</template>

<style scoped>
    section {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
    }

    figure img {
        width: 10rem;
    }

    .card {
        border: solid 0.1px rgba(255, 248, 220, 0.561);
        padding: 20px 20px 20px 2px;
    }

    h1 {
        font-size: 30px;
        font-weight: bolder;
        text-align: center;
    }
</style>
