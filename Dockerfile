# Usa la imagen oficial de Node.js 18 como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor

WORKDIR /app


COPY . .

RUN npm install

# Construye la aplicación Nuxt.js

# Expone el puerto predeterminado de Nuxt.js
EXPOSE 3000

# Ejecuta el servidor Nuxt.js en modo de producción
CMD ["npm", "run", "dev"]
