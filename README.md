## Getting Started

### run in docker

1. First, install [docker](https://docs.docker.com/get-docker/)
2. run docker container

```bash
cd survey
# macOS
docker run -it --rm -v '${pwd}/src':/survey -w /survey -p 3000:3000 node:20.11-slim /bin/bash

# windows
docker run -it --rm -v "path/to/survey/src/dir":/survey -w /survey -p 3000:3000 node:20.11-slim /bin/bash

# inside docker container
# install dependencies (only need to run once)
npm install

# run server
npm run dev  
```

### run in local

1. First, install [node.js](https://nodejs.org/en) and npm (npm will automatically installed with node.js).

​	Add node and npm to path.



2. Try the following command to see if you've installed node and npm correctly.

```bas
node --version
npm --v
```



3. Enter the root directory of project: `/moral-front-end/`

​	Run the following command to install dependencies.

```ba
npm install
```



4. Run server at development mode:

```bash
npm run dev             
```