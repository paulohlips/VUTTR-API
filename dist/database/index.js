"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});/*
Arquivo de passa as configurações de conexão com BD
*/

var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _dbConnection = require('../config/dbConnection'); var _dbConnection2 = _interopRequireDefault(_dbConnection);

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = _mongoose2.default.connect(_dbConnection2.default.url, {
      useNewUrlParser: true,
      useFindAndModify: true
    });
  }
}

exports. default = new Database();
