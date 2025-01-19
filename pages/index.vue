<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const getData = async (url) => {
    try {
        let response = await axios.get(url);
        if (response.status !== 500) {
            return response.data
        } else {
            return []
        }
    } catch (error) {
        console.log(error);
    }

};

const getskills = () => getData('/api/skills/read');
const getprojects = () => getData('/api/projects/read');

const skills = ref([]);
const projects = ref([]);

const isDarkMode = ref(false)

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'business' : 'garden')
    localStorage.setItem('theme', isDarkMode.value ? 'business' : 'garden')
}

onMounted(async () => {
    projects.value = await getprojects();
    skills.value = await getskills();

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        isDarkMode.value = savedTheme === 'business'
        document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
        document.documentElement.setAttribute('data-theme', 'garden')
    }
})

</script>

<template>
    <Informacion :isDarkMode="isDarkMode" :toggleTheme="toggleTheme" />

    <h1 class="mb-5" id="proyectos">Proyectos</h1>
    <Card :items="projects" />

    <h1 class="mb-5" id="skills">Conjunto de habilidades</h1>
    <Card :items="skills" />

    <h1 class="mb-5" id="contact">CV</h1>
    <div class="bg-base-200  rounded-lg shadow-lg p-6 mb-10 h-auto">
        <div class="space-y-2 flex items-center">
            <iframe src="/docs/CV_CARLOS_RAMOS.pdf" height='400px' width='100%'></iframe>
        </div>
    </div>

    <h1 class="mb-5" id="contact">Contáctame</h1>
    <section class="mx-auto ml-5 mr-5 bg-base-200 px-4 mb-10">
        <ContactForm />
    </section>

    <Footercomponet />

</template>

<style scoped>
section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
}

h1 {
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}
</style>
