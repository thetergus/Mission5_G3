# https://www.youtube.com/watch?v=gAkwW2tuIqE

# This Dockerfile are the instructions we give to Docker to package this app into a reusable Image
# The below cmd will create our image from our app using this Dockerfile and call it app-name
# # docker build -t <APP-NAME-IMAGE> .

# To check the available images:
# # docker images

# To run an image (and create a container):
# # docker run -dp 3001:3000 --name <APP-NAME> <APP-NAME-IMAGE>

# To check all containers
# # docker ps -a

# To stop a container that is runninng
# # docker stop <CONTAINER-ID>
# To remove a container
# # docker rm <CONTAINER-ID>

# ------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------

# # need an OS to run my api
# FROM node:18-alpine

# # set working directory for rest of Dockerfile commands we make
# WORKDIR /app

# # copy over only the package.json and then install it (before copying over everything else) because this may make it faster due to caching. I.e. if the dependencies don't change, but the code changes, the dependencies won't be reinstalled since they're in cache.
# COPY package.json yarn.lock ./

# # install node dependencies
# RUN yarn install

# # copy my api files to the OS
# COPY . .

# # build my api
# RUN yarn build

# # expose a port to be able to access the app within the container
# EXPOSE 3000

# # run my api
# CMD ["yarn", "start"]

# ------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------

# # https://www.youtube.com/watch?v=gAkwW2tuIqE

# need an OS to run my api

FROM node:18-alpine

# set working directory for rest of Dockerfile commands we make
WORKDIR /app

# copy over only the package.json and then install it (before copying over everything else) because this may make it faster due to caching. I.e. if the dependencies don't change, but the code changes, the dependencies won't be reinstalled since they're in cache.
COPY package.json yarn.lock ./

RUN yarn install

# copy my app files to the OS
COPY . .

# build my api
RUN yarn build

ENV PORT=3000

EXPOSE 3000

# # run my api
# CMD ["yarn", "start"]
CMD ["yarn", "run", "dev2"]

# ------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------
