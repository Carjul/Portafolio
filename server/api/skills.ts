
import { defineEventHandler } from 'h3';

const skills = [
    {
        title: 'Node js',
        image: '../assets/img/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png',
        description: 'Es un entorno de ejecuci�n de JavaScript, basado en una arquitectura no bloqueante y manejada por eventos para ayudar a los desarrolladores a crear aplicaciones distribuidas robustas.'
    },
    {
        title: 'Express',
        image: '../assets/img/pngwing.com.png',
        description: 'Express es framework de aplicaci�n web de Node js que proporciona amplias funciones para crear aplicaciones web y m�viles. Se utiliza para crear una aplicaci�n web h�brida, de varias p�ginas y de una sola p�gina.'
    },
    {
        title: 'Sequelize',
        image: "../assets/img/toppng.com-sequelize-logo-443x512.png",
        description: 'Es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.'
    },
    {
        title: 'Javascript',
        image: '../assets/img/js.png',
        description: 'Es el lenguaje de programaci�n que se usa para a�adir interactividad a sitios web.'
    },
    {
        title: 'Postgres',
        image: '../assets/img/posgres.png',
        description: 'Es un sistema de gesti�n de bases de datos relacionales de c�digo abierto con una gran capacidad de ampliaci�n.'
    },
    {
        title: 'React',
        image: '../assets/img/pngegg.png',
        description: 'Es una combinaci�n del lenguaje HTML y el JavaScript, por lo que tambi�n se considera una extensi�n.'
    },
    {
        title: 'Redux',
        image: '../assets/img/redx.png',
        description: 'Es una librer�a para controlar el estado de nuestras aplicaciones web f�cilmente, de una forma consistente entre cliente y servidor, testeable y con una gran experiencia de desarrollo.'
    },
    {
        title: 'Html',
        image: '../assets/img/html.png',
        description: 'El Lenguaje de Marcado de Hipertexto (HTML) es el c�digo que se utiliza para estructurar y desplegar una p�gina web y sus contenidos.'
    }
];

export default defineEventHandler(async (event) => {
  return {
    skills
  };
});
