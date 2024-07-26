# Use the official Node.js 14 image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the default Nuxt.js port (3000)
EXPOSE 3000

# Start the Nuxt.js development server
CMD ["npm", "run", "dev"]