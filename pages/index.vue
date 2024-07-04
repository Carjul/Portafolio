<script setup>
    import { ref, onMounted } from 'vue';

    const title = ref('Portafolio');
    const skills = ref([
        {
            title: "Node.js",
            image: '../assets/img/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png',
            description: "Es un entorno de ejecución de JavaScript, basado en una arquitectura no bloqueante y manejada por eventos para ayudar a los desarrolladores a crear aplicaciones distribuidas robustas."
        },
        {
            title: "Golang",
            image: "../assets/img/golang.png",
            description: "Es un lenguaje de programación concurrente y compilado diseñado para ser eficiente, sencillo y seguro."
        },
        {
            title: "MongoDB",
            image: "../assets/img/mongodb.png",
            description: "Es una base de datos NoSQL orientada a documentos, conocida por su flexibilidad y escalabilidad."
        },
        {
            title: "Vue.js",
            image: "../assets/img/vue.png",
            description: "Es un framework progresivo de JavaScript utilizado para construir interfaces de usuario y aplicaciones de una sola página."
        },
        {
            title: "Three.js",
            image: "../assets/img/threejs.png",
            description: "Es una biblioteca de JavaScript que permite crear y mostrar gráficos 3D en el navegador."
        },
        {
            title: "Pinia",
            image: "../assets/img/pinia.png",
            description: "Es un almacén de estado para Vue.js que se utiliza para gestionar el estado de la aplicación de manera más eficiente."
        }
    ]);

    const cambiarTitulo = () => {
        document.title = title.value;
    };

    onMounted(() => {
        cambiarTitulo();
    });
</script>


<template>
    <main class="flex flex-col items-center w-full h-auto bg-gradient-to-r from-blue-500 to-green-500 to-pink-500 w-full h-screen">
        <section class="flex flex-col">
            <nav class="py-10 flex items-start">
                <h1 class="font-burtons text-xl">Developed byed</h1>
                <ul class="flex items-center">
                    <li>
                        <a class="bg-primary from-cyan-500 text-to-teal-500 text-white px-2 py-2 border-none rounded-md ml-8 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 ease-in-out" href="https://drive.google.com/file/d/1epcJ9IIWkNc2SsZCDHgQEZpeRtoYLtuT/view?usp=drivesdk" target="_blank">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
        <section class="pb-2 text-neutral-content">
            <div class="flex flex-col items-center text-center p-10 py-10">
                <h2 class="text-2xl py-2 md:text-3xl">Carlos Julian Ramos González</h2>
                <h3 class="text-2xl py-2 md:text-3xl">Full-stack Developer</h3>
                <p class="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl">Freelancer providing services for programming and design websites. Join me down below and let's get work!</p>
                <div class="mx-auto rounded-full w-60 h-60 overflow-hidden mt-39 md:h-96 md:w-96">
                    <img src="https://res.cloudinary.com/dim2wnoej/image/upload/v1669587531/WhatsApp_Image_2022-09-06_at_8.17.22_PM_lz0qp5.jpg" layout="fill" objectFit="cover" alt="Profile Image" />
                </div>
            </div>
        </section>
    </main>

    <section class="mx-auto pl-20 pr-20">
        <h1 class="text-3xl font-bold my-5">Skillset</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="skill in skills" :key="skill.title" class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
                <figure>
                    <img :src="skill.image" :alt="skill.title" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ skill.title }}</h2>
                    <p>{{ skill.description }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto pl-20 pr-20">
        <h1 class="text-3xl font-bold my-5">Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <!-- Tarjeta de Proyecto -->
            <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5 mb-5">
                <a href="https://gym-mthatwords.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <figure>
                        <img src="https://res.cloudinary.com/dim2wnoej/image/upload/v1668474391/WhatsApp_Image_2022-10-20_at_5.42.28_PM_pfncqb.jpg" alt="Liberfit" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Liberfit</h2>
                        <p>Es una aplicación WEB de administración y gestión de gimnasios en todo su entorno.</p>
                    </div>
                </a>
            </div>

            <!-- Otras Tarjetas de Proyectos... -->
            <!-- Sigue el mismo formato para los demás proyectos -->
        </div>
    </section>

    <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current">
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.456 1.015-.326 2.145.211 2.463 1.226l.841 2.517 5.013-1.677-.84-2.517c-.392-1.203.434-2.542 1.831-2.542.88 0 1.601.564 1.86 1.314l.842 2.515 2.431-.808c1.135-.328 2.145.317 2.463 1.229.328 1.018-.211 2.127-1.231 2.456l-2.433.809 1.622 4.823 2.432-.808c1.354-.385 2.558.59 2.558 1.839 0 .817-.509 1.581-1.328 1.846zm-11.775-.214l-1.622-4.824-5.013 1.678 1.622 4.823 5.013-1.677z" />
            </svg>
            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </div>
        <div>
            <span class="footer-title">Social</span>
            <div class="grid grid-flow-col gap-4">
                <a href="https://twitter.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.563-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.717 0-4.92 2.203-4.92 4.92 0 .386.044.762.128 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.726-.666 1.571-.666 2.475 0 1.71.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.697 4.384 3.946 4.838-.413.111-.849.171-1.296.171-.317 0-.626-.031-.927-.089.627 1.956 2.445 3.379 4.6 3.419-1.684 1.32-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.175-.068 2.179 1.396 4.768 2.212 7.557 2.212 9.054 0 14.002-7.497 14.002-13.986 0-.213-.004-.425-.014-.637.961-.694 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="https://youtube.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                        <path d="M19.615 3.184c-.683-.265-1.411-.443-2.22-.544-.81-.102-1.825-.166-3.011-.193-1.195-.028-2.435-.021-3.758-.021-1.323 0-2.563-.007-3.758.021-1.186.027-2.201.091-3.011.193-.809.101-1.537.279-2.22.544-.698.274-1.289.701-1.801 1.304-.513.603-.904 1.402-1.171 2.417-.284 1.062-.435 2.439-.435 4.071v1.292c0 1.632.151 3.009.435 4.071.267 1.015.658 1.814 1.171 2.417.512.603 1.103 1.03 1.801 1.304.683.265 1.411.443 2.22.544.81.102 1.825.166 3.011.193 1.195.028 2.435.021 3.758.021 1.323 0 2.563.007 3.758-.021 1.186-.027 2.201-.091 3.011-.193.809-.101 1.537-.279 2.22-.544.698-.274 1.289-.701 1.801-1.304.513-.603.904-1.402 1.171-2.417.284-1.062.435-2.439.435-4.071v-1.292c0-1.632-.151-3.009-.435-4.071-.267-1.015-.658-1.814-1.171-2.417-.512-.603-1.103-1.03-1.801-1.304zm-8.615 12.816v-7.5l6.5 3.75-6.5 3.75z" />
                    </svg>
                </a>
                <a href="https://facebook.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.49v-9.284h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.314h3.591l-.467 3.622h-3.124v9.284h6.124c.732 0 1.325-.593 1.325-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

    html {
        scroll-behavior: smooth;
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;
        padding: 20px;
    }

    .title {
        text-align: center;
    }

    .section {
        margin-bottom: 20px;
    }

    .card-body {
        padding: 15px;
    }

    @media (max-width: 768px) {
        .section {
            margin-bottom: 10px;
        }

        .card-body {
            padding: 10px;
        }
    }
</style>
