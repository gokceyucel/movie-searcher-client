FROM node:8.12.0-alpine as react-build

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install --silent

# Copy app source
COPY dist /www

# Set work directory to /www
WORKDIR /www

# set your port
ENV PORT 9090

# expose the port to outside world
EXPOSE  9090

# start command as per package.json
CMD ["npm", "run", "build:prod"]

FROM nginx:alpine
COPY --from=react-build /www /usr/share/nginx/html
EXPOSE 9090
CMD ["nginx", "-g", "daemon off;"]
