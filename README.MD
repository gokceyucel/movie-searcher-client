# Movie Searcher Client (Frontend)

- A case study to search and display movie posters using The Open Movie Database (http://www.omdbapi.com/)
- This is the client side part of the application implemented using React.js.

# Getting Started

### Prerequisites
- Node.js v8.x
- Docker v18.x

### How to run app
```sh
# Clone it
git clone git@github.com:gokceyucel/movie-searcher-client.git
cd movie-searcher-client

# Install dependencies
npm install

# Start development live-reload server
npm start

# Build for production
npm run build:prod

```

### How to run tests
```sh
npm test
```

### How to run in a container
```sh
cd movie-searcher-client

# Build your docker image
docker build --build-arg API_URL=localhost --build-arg API_PORT=8080 -t movie-searcher-client .

# Run your docker container
docker run -p 9090:80 movie-searcher-client
```
