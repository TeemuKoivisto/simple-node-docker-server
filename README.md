# simple-node-docker-server

Just testing a setup with Node.js and Docker.

## How to install locally

1) Install Node.js >=8 using `nvm`
2) Clone this repository and enter: `npm i`
3) Create your local `.env` file with: `cp .env.local .env`
4) Run the development server with: `npm run dev`

## How to install as Docker-image

### For Windows users

1) If you have Windows Professional/Enterprise, install Docker. If you don't install Docker Toolbox. Also it might be you can't even install Docker if you have wrong type of CPU. https://www.docker.com/

2) Enable virtualization from BIOS if you don't have it enabled. If you have UEFI hold shift while pressing restart and then choose restart and in boot screen hit BIOS key(s). For me it was F12. Check it first before you try.

3) Load the `docker-functions.sh` to your bash: `. docker-functions.sh`

4) Build the image: `docker-build`

5) After that has finished you can create your server from that image with: `docker-run`

6) See the server running on either: `http://localhost:5555` or if you have Docker Toolbox on your docker-machine (mine is `http://192.168.99.100:5555`)

### For Mac OS X / Ubuntu

1) Install Docker https://www.docker.com/

2) Enable file sharing from Docker options (at least on MacOS) for this folder: eg. `/Users/teemu/git_projects/simple-node-docker-server`

3) Load the `docker-functions.sh` to your bash: `. docker-functions.sh`

4) Build the image: `docker-build`

5) After that has finished you can create your server from that image with: `docker-run`

6) See the server running on: `http://localhost:5555`

## docker-functions.sh

`docker-build` builds the Docker-image

`docker-run` creates a container from the image and binds it to port 5555

`docker-rm` stops and removes all the containers built from this image