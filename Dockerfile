# Use official Node.js image as base
FROM node:14

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Expose the port (optional, needed only if you want to run the app inside the container)
EXPOSE 3000

# Command to run the app (we'll skip this for now as it's just for building)
