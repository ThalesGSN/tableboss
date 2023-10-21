# Stage 1: Build the React application
FROM node:16 as build-backend

# First, copy over the shared-types library
COPY /shared /shared

# Navigate to the shared-types library and npm link it
WORKDIR /shared
RUN npm link

# Navigate back to the app and install its dependencies
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install app dependencies
RUN npm install

# Link the shared library to the app
RUN npm link shared

# Copy the rest of the app
COPY backend/ .

# Build the app
RUN npm run build

# Stage 2 Use the official Node.js image as a parent image
FROM node:18 as host-backend

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the build output from the previous stage
COPY --from=build-backend /app .

# Set the working directory in the container
WORKDIR /usr/src/app/dist

# Specify the command to run on container start
CMD ["node", "app.js"]
