<template>
   <section class="mx-auto ml-5 mr-5 bg-base-200 px-4" >
        <div v-for="(item, index) in paginatedItems" :key="index" class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5 hover:bg-base-300">
            <figure>
                <NuxtImg :src="item.image" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ item.name }}</h2>
                <p>{{ item.description }}</p>
                <div class="card-actions" v-if="item.cliente || item.api || item.repositorio">
                    <a v-if="item.cliente !== ''" class="link" :href="item.cliente" target="_blank">Website</a>
                    <a v-if="item.api !== ''" class="link" :href="item.api" target="_blank">API </a>
                    <a v-if="item.repositorio !== ''" class="link" :href="item.repositorio" target="_blank">Repositorio </a>
                </div>
            </div>
        </div>
    </section>

    <div class="flex justify-center items-center mt-4 mb-6">
        <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-primary mr-4">
            &lt;
        </button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages"
            class="btn btn-primary ml-4">
            &gt;
        </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        itemsPerPage: 3,  // Número de elementos por página
        currentPage: 1    // Página actual
      };
    },
    computed: {
      // Calcular los elementos a mostrar en la página actual
      paginatedItems() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.items.slice(start, end);
      },
      // Número total de páginas
      totalPages() {
        return Math.ceil(this.items.length / this.itemsPerPage);
      }
    },
    methods: {
      // Función para ir a la siguiente página
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      // Función para ir a la página anterior
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
}

figure img {
    padding: 1px;
    width: 90%;
    height: 90%;
}

p {
    font-family: 'Roboto', sans-serif;
}
a:hover {
    color: #ff0000;
}

  </style>
  