# Usa la imagen oficial de Node.js 18 como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Construye la aplicación Nuxt.js
RUN npm run generate

# Expone el puerto predeterminado de Nuxt.js
EXPOSE 3000

# Ejecuta el servidor Nuxt.js en modo de producción
CMD ["npm", "run", "start"]
