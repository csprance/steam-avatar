# node:12
FROM node:12

# install the application
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

# Set up or Environment from the docker-compose file
ARG STEAM_API_KEY
ENV STEAM_API_KEY $STEAM_API_KEY

# 3000 is the port we need for nextjs
EXPOSE 3000

# build and start
RUN npm run build
CMD npm run start
