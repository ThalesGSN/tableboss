# Stage 1: Build the React application
FROM node:16 as build-frontend

# First, copy over the shared-types library
COPY /shared /shared

# Navigate to the shared-types library and npm link it
WORKDIR /shared
RUN npm link

# Navigate back to the app and install its dependencies
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install app dependencies
RUN npm install

# Link the shared library to the app
RUN npm link shared

# Copy the rest of the app
COPY frontend/ .

# Build the app
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:alpine as serve-frontend

# Copy the build output from the previous stage
COPY --from=build-frontend /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
