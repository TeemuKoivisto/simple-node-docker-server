#!/bin/bash -e

docker-build() {
  docker build -t teemuk/simple-node-docker-server .
}

docker-run() {
  docker run -p 5555:4444 teemuk/simple-node-docker-server
}

docker-rm-containers() {
  docker ps -a | grep simple-node-docker-server | awk '{print $1}' | xargs docker stop
  docker ps -a | grep simple-node-docker-server | awk '{print $1}' | xargs docker rm
}