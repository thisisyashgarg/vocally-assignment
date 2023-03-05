FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5432
CMD npm start