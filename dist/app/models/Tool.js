"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _mongooseautoincrement = require('mongoose-auto-increment'); var _mongooseautoincrement2 = _interopRequireDefault(_mongooseautoincrement);

var _dbConnection = require('../../config/dbConnection'); var _dbConnection2 = _interopRequireDefault(_dbConnection);

_mongoose2.default.connect(_dbConnection2.default.url);
_mongooseautoincrement2.default.initialize(_mongoose2.default);

const ToolSchema = new _mongoose2.default.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [String]
},
  {
    versionKey: false
  });

ToolSchema.plugin(_mongooseautoincrement2.default.plugin, {
  model: "Tool",
  fiel: "id",
  startAt: 1,
  incrementBy: 1
});

exports. default = _mongoose2.default.model("Tool", ToolSchema);
