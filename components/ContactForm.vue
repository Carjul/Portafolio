
<template >
    <form @submit.prevent="submitContactForm" class="form flex flex-col w-4/5 mx-auto mb-10 mt-10 ">
      
        <input v-model="form.name" type="text"  placeholder="Nombre"  
        class="input h-full w-full " required />
      
      <label class="input input-bordered flex items-center gap-2">
        
        <input v-model="form.email" type="email"  placeholder="Email"  class="input h-full w-full " required />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        
        <input v-model="form.subject" type="text"  placeholder="Asunto" class="input h-full w-full " required />
      </label>
      <label class="input input-bordered flex items-center h-auto ">
        
        <textarea v-model="form.message"  placeholder="Mensaje" class="textarea w-full px-4"  required></textarea>
      </label>
      <button type="submit" class="btn btn-primary mt-4">Enviar</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const submitContactForm = async () => {
  
      console.log('Contact form submitted:', form.value);
      await axios.post('/api/email/send', form.value);
      form.value.name = '';
      form.value.email = '';
      form.value.subject = '';
      form.value.message = '';
      
  };
  </script>
  

    