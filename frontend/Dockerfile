# stage 1 chossing node as base image
FROM node:20-alpine AS builder

#naming thr woriking directory
WORKDIR /app

# copying all the packages from pakcage.json to current working directory
COPY package*.json ./

# npm install to install all the packages from pakcage.json
RUN npm install

#copy the rest of code
COPY . .

#generating the build directory
RUN npm run build

#stage 2 choosing nginx as the image
FROM nginx:stable-alpine

# deleting the rest of files in the /user/share/nginx/html directory
RUN rm -rf /usr/share/nginx/html/*

# copting the build from /app/dist to /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html


COPY default.conf /etc/nginx/conf.d/default.conf


# exposing the port 80 of the container
EXPOSE 80

# start nginx server
CMD [ "nginx","-g","daemon off;" ]