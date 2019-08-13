/*
Arquivo de passa as configurações de conexão com BD
*/

import mongoose from "mongoose";

import conn from "../config/dbConnection";

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(conn.url, {
      useNewUrlParser: true,
      useFindAndModify: true
    });
  }
}

export default new Database();
