<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';


const getData = async (url) => {
    let response;

    try {
        response = await axios.get(url);
        if (response.status !== 500) {
            console.log(response)
        }
    } catch (error) {

        console.log(error);
    }

    return response ? response.data : [];
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
