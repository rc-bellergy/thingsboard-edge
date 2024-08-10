# Notes:

## GitHub
    https://github.com/rc-bellergy/thingsboard-edge.git

## Faile to connect oauth2Clients
 - Start the thingsboard server on 8080 port for login
 - update the server address in the proxy.conf.js file

## Install
    yarn

- nodeVersion: v20.11.1
- yarnVersion: v1.22.17

## Start

    npm run start

## Custom theme style
https://swimlane.github.io/

    /src/theme.scss

## Build UI-NGX

    npm run build:prod

## Build updated docker image

    mvn clean install -DskipTests -Ddockerfile.skip=false

## Load new docker image

  1. Check the docker-compose.yml. The image version should use 'latest'. (image: thingsboard/tb-edge:latest)
  2. docker-compose up --build -d

