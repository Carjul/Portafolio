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
            <button v-if="!update" type="submit" class="btn btn-primary mt-4">Crear</button>
            <button v-else @click="updateSkill()" class="btn btn-primary mt-4">Actualizar</button>

          </form>
        </div>
        
      </div>
    </div>
    <div class="flex w-full h-ful px-5">

    <section class="flex mx-auto ml-5 mr-5 flex-row flex-wrap">

<div v-for="(skill, index) in skills" :key="index" class="card card-compact w-96 bg-base-100 shadow-xl px-2 mt-5 mb-5" >
    <figure>
        <img :src="skill.image" alt="Skill Image" loading="lazy" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{{ skill.title }}</h2>
        <p>{{ skill.description }}</p>
    <div class="card-end">
        <button class="btn btn-error" @click="deleteSkill(skill._id)">Eliminar</button>
        <button class="btn btn-primary" @click="setinputkill(skill,skill._id)">Editar</button>
    </div>
    </div>

</div>


</section>
</div>

  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue';
  import axios from 'axios';
 const update = ref(false)
  const getskills = async () => {
        try {
            const response = await axios.get('/api/skills/read');
          
            return response.data;
        } catch (error) {
            console.error('Error al obtener las habilidades:', error);
            return [];
        }
    };
    const skill = reactive({
    _id: '',
    title: '',
    image: '', 
    description: '',
  });
  const setinputkill= async (params,id) => {
    skill._id = id;
    skill.title = params.title;
    skill.image = params.image;
    skill.description =params.description;
    imageUrl.value = params.image;
    update.value = true;
  
  };
  const fileInput = ref(null);
  const imageUrl = ref('');
  const skills = ref([]);
  
  
  const handleFileChange = async () => {
    if (fileInput.value.files.length === 0) {
      alert('Por favor, selecciona un archivo.');
      return;
    }
  
    const file = fileInput.value.files[0];
    const formData = new FormData()
    formData.append('photo', file)
  
    const response = await axios.post('/api/upload/img', formData)
    console.log('---->:', response.data)
    if (response){
      skill.image = response.data.secure_url;
    }else{
      alert('Error al subir la imagen');
    }
  };
  const deleteSkill = async (id) => {
    try {
      const response = await axios.delete(`/api/skills/delete`,{
      data: { _id: id }
    });
      console.log('Habilidad eliminada:', response.data);
      skills.value = await getskills();
    } catch (error) {
      console.error('Error al eliminar la habilidad:', error);
    }
  };
  const updateSkill = async () => {
    try {
      console.log(skill)
      const response = await axios.put(`/api/skills/update`, skill);
      console.log('Habilidad actualizada:', response.data);
      skills.value = await getskills();
      skill._id = '';
      skill.title = '';
      skill.description = '';
      imageUrl.value = '';
      update.value = false;
    } catch (error) {
      console.error('Error al actualizar la habilidad:', error);
    }
  };
  const createSkill = async () => {
    try {
      const response = await axios.post('/api/skills/create', skill);
      console.log('Habilidad creada:', response.data);
      skills.value = await getskills();
      
      skill.title = '';
      skill.description = '';
      imageUrl.value = '';
    } catch (error) {
      console.error('Error al crear la habilidad:', error);
    }
  };
  onMounted(async () => {
    skills.value = await getskills();
  });
  </script>
  
  <style scoped>
  /* Estilos adicionales opcionales */
  </style>
  