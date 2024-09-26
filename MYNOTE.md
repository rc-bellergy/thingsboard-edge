## Install
    yarn install

- nodeVersion: v20.11.1
- yarnVersion: v1.22.17

## Start

    cd ui-ngx
    npm run start

## Custom theme style

    /src/theme.scss

## Build UI-NGX

    npm run build:prod

## Build updated docker image using Maven

    mvn clean install -DskipTests -Ddockerfile.skip=false

## Upload to Docker Hub

    docker tag thingsboard/tb-edge:latest bellergy/tb-edge:latest
    docker push bellergy/tb-edge:latest 

## Load new docker image

  1. Check the docker-compose.yml. The image should use bellergy/tb-edge:latest
  2. docker compose pull
  3. docker compose up --build -d
  4. docker compose logs -f mytb



