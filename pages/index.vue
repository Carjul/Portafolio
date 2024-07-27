<script setup>
import { ref, onMounted, watchEffect } from 'vue';
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

const skills = ref([]);
const projects = ref([]);

onMounted(async () => {
    skills.value = await getskills();
    projects.value = await getprojects();
});

watchEffect(() => {
    console.log('Skills:', skills.value);
    console.log('Projects:', projects.value);
});
</script>

<template>
    <main class="flex flex-col items-center bg-gradient-to-r from-blue-500 to-green-500 to-pink-500 w-full">
        <section class="flex flex-col">
            <nav class="py-10 flex items-start">
                <h1 class="font-burtons text-xl">Developed by</h1>
                <ul class="flex items-center">
                    <li>
                        <a class="bg-primary from-cyan-500 text-to-teal-500 text-white px-2 py-2 border-none rounded-md ml-8 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 ease-in-out"
                           href="https://www.linkedin.com/in/carlos-juli%C3%A1n-ramos/" target="_blank">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
        <section class="pb-2 text-neutral-content">
            <div class="flex flex-col items-center text-center p-10 py-10">
                <h2 class="text-2xl py-2 md:text-3xl">
                    Carlos Julian Ramos González
                </h2>
                <h3 class="text-2xl py-2 md:text-3xl">
                    Full-stack Developer
                </h3>
                <p class="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl">
                    Freelancer providing services for programming and design websites. Join me down below and let's get to work!
                </p>
                <div class="mx-auto rounded-full w-60 h-60 mx-auto overflow-hidden mt-39 md:h-96 md:w-96">
                    <img src="https://res.cloudinary.com/dim2wnoej/image/upload/v1669587531/WhatsApp_Image_2022-09-06_at_8.17.22_PM_lz0qp5.jpg" layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
    </main>
    <br>
    <h1>Skillset</h1>
    <br>
    <section class="mx-auto ml-5 mr-5 bg-base-200 px-4">
        <div v-for="(skill, index) in skills" :key="index" class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
            <figure>
                <img :src="skill.image" alt="Skill Image" loading="lazy" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ skill.title }}</h2>
                <p>{{ skill.description }}</p>
            </div>
        </div>
    </section>
    <br>
    <h1>Projects</h1>
    <br>
    <section class="mx-auto ml-5 mr-5 bg-base-200 px-4">
        <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5" v-for="(project, index) in projects" :key="index">
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