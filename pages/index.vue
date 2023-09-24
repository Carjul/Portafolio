<script>

export default {
  data() {
    return {
        title: 'Portafolio',    
    };
  },
   methods: {
    cambiarTitulo() {
      document.title = this.title; 
    }
  },
  mounted() {
    this.cambiarTitulo();
  },

};
</script>
<template  >
  <main class="flex flex-col items-center w-full h-auto bg-gradient-to-r from-blue-500 to-green-500 to-pink-500 w-full h-screen">
    <section class="flex flex-col">
      <nav class="py-10 flex items-start">
        <h1 class="font-burtons text-xl">Developed byed</h1>
        <ul class="flex items-center">
          <li>
            <a class="bg-primary from-cyan-500 text- to-teal-500 text-white px-2 py-2 border-none rounded-md ml-8 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 ease-in-out"
              href="https://drive.google.com/file/d/1epcJ9IIWkNc2SsZCDHgQEZpeRtoYLtuT/view?usp=drivesdk" target="_blank">
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
        <p class="text-md py-5 leading-8  max-w-xl mx-auto md:text-xl">
          Freelancer providing services for programming and design websites. Join me down below and let's get work!
        </p>
       
        <div class="mx-auto rounded-full w-60 h-60  overflow-hidden mt-39 md:h-96 md:w-96">
          <img src="https://res.cloudinary.com/dim2wnoej/image/upload/v1669587531/WhatsApp_Image_2022-09-06_at_8.17.22_PM_lz0qp5.jpg" layout="fill" objectFit="cover" />
        </div>

      </div>
  
    </section>
  </main>
 
  
  <section class="mx-auto pl-20 pr-20">

    <br>
  <!--   <p class="text-neutral-content text-xl">
      Since the beginning of my journey as a freelance designer and
      developer, I've done remote work for
      <span class="text-teal-500 text-xl"> agencies </span>
      consulted for <span class="text-teal-500 text-xl">startups </span>
      and collaborated with talanted people to create digital products
      for both business and consumer use.
      <p class="text-teal-500 text-xl">
        I offer from a wide range of services, including brand design,
        programming and teaching.
      </p>
    </p> -->
    
  </section>


  <br>

  <h1>Skillset</h1>
  <br>
  <section class="mx-auto ml-5 mr-5">

    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img
          src="../assets/img/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png"
          alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Node js</h2>
        <p>Es un entorno de ejecución de JavaScript, basado en una arquitectura no bloqueante y manejada por eventos para
          ayudar a los desarrolladores a crear aplicaciones distribuidas robustas.</p>

      </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img src="../assets/img/pngwing.com.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Express</h2>
        <p> Express es framework de aplicación web de Node js que proporciona amplias funciones para crear aplicaciones
          web y móviles. Se utiliza para crear una aplicación web híbrida, de varias páginas y de una sola página.</p>

      </div>
    </div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img src="../assets/img/toppng.com-sequelize-logo-443x512.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Sequelize</h2>
        <p>Es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla,
          entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.</p>

      </div>
    </div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img src="../assets/img/js.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Javascript</h2>
        <p>Es el lenguaje de programación que se usa para añadir interactidad a sitios web.</p>

      </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img src="../assets/img/posgres.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Postgres</h2>
        <p>Es un sistema de gestión de bases de datos relacionales de código abierto con una gran capacidad de ampliación.
        </p>

      </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img src="../assets/img/pngegg.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">React</h2>
        <p>Es una combinación del lenguaje HTML y el JavaScript, por lo que también se considera una extensión</p>

      </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img src="../assets/img/redx.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Redux</h2>
        <p>Es una librería para controlar el estado de nuestras aplicaciones web fácilmente, de una forma consistente
          entre cliente y servidor, testeable y con una gran experiencia de desarrollo</p>

      </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <figure><img src="../assets/img/html.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Html</h2>
        <p>El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página
          web y sus contenidos.</p>

      </div>
    </div>


  </section>

  <br>
  <h1>Projects</h1>
  <br>

  <section class="mx-auto ml-5 mr-5">
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <a href="https://gym-mthatwords.vercel.app/" target="_blank"
            rel="noopener noreferrer">
      <figure><img
          src="https://res.cloudinary.com/dim2wnoej/image/upload/v1668474391/WhatsApp_Image_2022-10-20_at_5.42.28_PM_pfncqb.jpg"
          alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Liberfit</h2>

        <p>Es una aplicación WEB de administración y gestión de gimnasios en todo su entorno.</p>

      </div>
      </a>
    </div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <a href="https://pi-pokemon-main-rho.vercel.app/" target="_blank"
            rel="noopener noreferrer">
      <figure><img
          src="https://res.cloudinary.com/dim2wnoej/image/upload/v1694145563/Captura_nyf9ik.png"
          alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Pokedex</h2>

        <p>Es una aplicación WEB en donde puedes encontrar informacion de todos los Pokemons.</p>

      </div>
      </a>
    </div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <a href="https://stack-menv.onrender.com/" target="_blank"
            rel="noopener noreferrer">
      <figure><img
          src="https://res.cloudinary.com/dim2wnoej/image/upload/v1694145700/Captura2_rt9y6s.png"
          alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Notas</h2>

        <p>Es una aplicación WEB en donde puedes guardar, listar eliminar y actulizar Notas.</p>

      </div>
      </a>
    </div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
      <a href="https://matricula-udwr.onrender.com/" target="_blank"
            rel="noopener noreferrer">
      <figure><img
          src="https://res.cloudinary.com/dim2wnoej/image/upload/v1694145700/Captura3_uano0e.png"
          alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Matricula</h2>

        <p>Es una aplicación WEB en donde puedes guardar y arganizar estudiantes para matricular en una escuela.</p>

      </div>
      </a>
    </div>
  </section>
  <br>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <div>
      <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
        clip-rule="evenodd" class="fill-current">
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
        </path>
      </svg>
      <p>Carlos Julián Ramos González<br />Full-stack web Deveper</p>
    </div>
    <div>
      <span class="footer-title">Social</span>
      <div class="grid grid-flow-col gap-4">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
            </path>
          </svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
            </path>
          </svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
            </path>
          </svg></a>
      </div>
    </div>
  </footer>
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