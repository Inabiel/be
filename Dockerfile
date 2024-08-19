# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port the app runs on
# EXPOSE 3000

# Set the environment variable for Node.js
# ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]
