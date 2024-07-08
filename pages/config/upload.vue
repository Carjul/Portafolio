<!-- En tu componente Vue -->
<template>
    <form @submit.prevent="submit">
      <input type="file" @change="selectFile" />
      <button type="submit">Subir Imagen</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const selectedFile = ref(null)
  
  const selectFile = (event) => {
    selectedFile.value = event.target.files[0]
  }
  
  const submit = async () => {
    const formData = new FormData()
    formData.append('photo', selectedFile.value)
  
    const response = await axios.post('/api/upload/img', formData)
    console.log('---->:', response.data)
  }
  </script>
  