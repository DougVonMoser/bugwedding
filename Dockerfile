FROM node:boron

# Create app directory
WORKDIR /usr/src/app

COPY package.json .

RUN npm install

# Bundle app source
COPY . .

RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "docker-start" ]