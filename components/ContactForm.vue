
<template >
    <form @submit.prevent="submitContactForm" class="form flex flex-col w-4/5 mx-auto mb-10 mt-10 ">
      <label class="input input-bordered flex items-center ">
        Name
        <input v-model="form.name" type="text"  placeholder="Your Name"  
        class="input h-full w-full " required />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        Email
        <input v-model="form.email" type="email"  placeholder="Your Email"  class="input h-full w-full " required />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        Subject
        <input v-model="form.subject" type="text"  placeholder="Subject" class="input h-full w-full " required />
      </label>
      <label class="input input-bordered flex items-center h-auto ">
        Message
        <textarea v-model="form.message"  placeholder="Your Message" class="textarea w-full px-4"  required></textarea>
      </label>
      <button type="submit" class="btn btn-primary mt-4">Send</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const submitContactForm = async () => {
  
      console.log('Contact form submitted:', form.value);
  
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if necessary */
  </style>
    