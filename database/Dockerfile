# indico la version a utilizar
FROM node:18  
# indica el directorio
WORKDIR /app
# copiamos el package json
COPY package*.json ./
# instalamos las dependencias copiadas
RUN npm install 
# copiamos el codigo desde la suente y el destino por eso es punto , punto
COPY . .
# exponemos el puerto que vamos a abrir
EXPOSE 8004
# comando para ejecutar
CMD  [ "npm" ,  "start" ]