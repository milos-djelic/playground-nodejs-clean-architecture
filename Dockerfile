FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm install
RUN npm run build

RUN chown -R node:node .
USER node 

EXPOSE 3000
CMD [ "npm", "start" ]
