FROM node:8.11

WORKDIR /app

COPY server.js /app
COPY dist/index.html /app/dist/index.html
COPY src /app/src
COPY webpack.config.js /app
COPY .babelrc /app
COPY package.json /app
COPY npm-packages-offline-cache /app/npm-packages-offline-cache
COPY .yarnrc /app/.yarnrc
COPY yarn.lock /app

RUN yarn
RUN yarn build:prod

EXPOSE 8080

CMD node server.js