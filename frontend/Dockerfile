# Build stage
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built application
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the application runs on
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
