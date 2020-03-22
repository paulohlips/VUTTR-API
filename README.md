# VUTTR-API

VUTTR is a NodeJS API that provides user manage a lis with his tecnology tools.

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run this project locally you must have installed

- [Node](https://nodejs.org/en/) (v10 or later)

- [Yarn](https://yarnpkg.com/pt-BR/) or [NPM](https://www.npmjs.com/)

ps: if you have some problem with bcrypt libs, just use
`$ npm install`

```
Give examples
```

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

The api will be listening on

```
http://locahost:3000
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

## Docker & Containerization

Is possible build a docker container, if tou have docker and docker-compose installed, running the follow commands:

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

## Built With

- ⚛️ **NodeJS** — A JavaScript runtime built on Chrome's V8 JavaScript engine.
- ⚛️ **ExpressJS** — A Node js web application server framework.  
- 💹 **MongoDB** — A document-oriented NoSQL database used for high volume data storage.
- 💹 **Mongoose** — An Object Data Modeling (ODM) library for MongoDB and Node. js.
- 💹 **Docker** —  The de facto standard to build and share containerized apps.

### Swagger

All docs are avaible on

```
 https://app.swaggerhub.com/apis/paulohlips/vuttr-api/v1
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
