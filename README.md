# VUTTR-API

VUTTR is a simple API builded with NodeJS, Express, MongoDB and Mongoose, that provide users manage his tecnology tools.

## Dependencies of API

- [Node](https://nodejs.org/en/) (v10 or later)
- [Yarn](https://yarnpkg.com/pt-BR/) ou [NPM](https://www.npmjs.com/)

ps: if you have some problem with bcrypt libs, just use ```$ npm install```

## Documentations

### Swagger

All docs are avaible on

```
 https://app.swaggerhub.com/apis/paulohlips/vuttr-api/v1
```

### Routes

```
GET /users - List all users
POST/users - Create user
PUT /users/{id} - Update user
DELETE/users/{id} - Delete user
```

```
GET /tools - List all tools
POST/tools - Create tools
PUT /tools/{id} - Update tools
DELETE/tools/{id} - Delete tools
```

```
POST /session - Create new session
```

## Installation

Clone repo:

```
https://github.com/paulohlips/VUTTR-API.git
```

Inside repo folder:

```
yarn
```

or

```
npm install
```

### Running VUTTR-API

Starting app on developer mode:

```
yarn dev
```

The api will be running on

```
http://locahost:3000
```

## Docker & Containerization

Is possible build a docker container, if tou have docker and docker-compose installed,running the follow commands:

```
docker-compose build --no-cache
```

```
docker-compose up -d
```

The container will be running on

```
http://localhost:3003
```
