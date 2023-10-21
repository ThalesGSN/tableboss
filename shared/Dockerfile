# Use an official Node.js runtime as the base image
FROM node:16 AS build-shared

# Set the working directory in the container
WORKDIR /shared

# Copy package.json and package-lock.json to the container
COPY shared/package*.json ./

# Install TypeScript globally in the container
RUN npm install -g typescript

# Install project dependencies
RUN npm install

# Go to root directory
WORKDIR /

# Copy the local TypeScript source files to the container
COPY shared/ shared/

# Set the working directory to the shared library
WORKDIR /shared

# Compile TypeScript to JavaScript
RUN tsc

# This is a TypeScript library, so there's no need to run it as an application.
# The final image will contain the compiled JavaScript files which can be used or shared as needed.
