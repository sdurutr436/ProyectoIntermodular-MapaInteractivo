# Dockerfile para desarrollo - Sprint 2 (Backend + MongoDB)
FROM node:20-alpine

WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
# Incluye: express, mongoose, cors, dotenv
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 5000

# Comando de desarrollo con nodemon
CMD ["npm", "run", "dev"]
