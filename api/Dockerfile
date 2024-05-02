FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/wait-for-it.sh && \
    chmod +x /usr/wait-for-it.sh

CMD /usr/wait-for-it.sh mysql-db:3306 -- node index.js