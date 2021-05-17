#STEP 1 : BUILD OF REACT PROJECT
FROM node:14.15.4-alpine AS build

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install --save --legacy-peer-deps

COPY . /app

RUN npm run build



#STEP 2 : CREATE NGINX SERVER
FROM nginx:alpine AS server

COPY --from=build /app/build usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]