# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's source code into the container
COPY . .

# Expose the port your Express application listens on (e.g., 3000)
EXPOSE 3030

# Start your application
CMD ["npm", "start"]
