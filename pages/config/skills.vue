<template>
    <div class="flex items-center justify-center h-screen bg-base-200">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Crear Nueva Habilidad</h2>
          <form @submit.prevent="createSkill">
            <div class="form-control">
              <label class="label">Título:</label>
              <input type="text" v-model="skill.title" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control">
              <label class="label">Imagen:</label>
              <input type="file" ref="fileInput" class="file-input file-input-bordered w-full max-w-xs" @change="handleFileChange" />
            </div>
            <div class="form-control">
              <label class="label">Descripción:</label>
              <textarea v-model="skill.description" class="textarea textarea-bordered w-full max-w-xs" />
            </div>
            <button type="submit" class="btn btn-primary mt-4">Crear</button>
          </form>
        </div>
        
      </div>
    </div>
    <div class="flex w-full h-ful px-5">

    <section class="flex mx-auto ml-5 mr-5 flex-row flex-wrap">

<div v-for="(skill, index) in skills" :key="index" class="card card-compact w-96 bg-base-100 shadow-xl px-2 mt-5 mb-5">
    <figure>
        <img :src="skill.image" alt="Skill Image" loading="lazy" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{{ skill.title }}</h2>
        <p>{{ skill.description }}</p>
    <div class="card-end">
        <button class="btn btn-error">Eliminar</button>
    </div>
    </div>

</div>


</section>
</div>

  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  const { data } = await useFetch('/api/skills/read')
  const fileInput = ref(null);
  const imageUrl = ref('');
  const skills = ref(data.value)
  const skill = reactive({
    title: '',
    image: '', // Se actualizará con la URL de la imagen cargada
    description: '',
  });
  
  const handleFileChange = async () => {
    if (fileInput.value.files.length === 0) {
      alert('Por favor, selecciona un archivo.');
      return;
    }
  
    const file = fileInput.value.files[0];
    const reader = new FileReader();
  
    reader.onloadend = async () => {
      const base64String = reader.result.toString();
      
        imageUrl.value = base64String;
        skill.image = imageUrl.value;
     
    };
  
    reader.readAsDataURL(file);
  };
  
  const createSkill = async () => {
    try {
      const response = await axios.post('/api/skills/create', skill);
      console.log('Habilidad creada:', response.data);
      // Limpia los campos del formulario
      skill.title = '';
      skill.description = '';
      imageUrl.value = '';
    } catch (error) {
      console.error('Error al crear la habilidad:', error);
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales opcionales */
  </style>
  