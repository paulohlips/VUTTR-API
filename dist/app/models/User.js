"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _mongooseautoincrement = require('mongoose-auto-increment'); var _mongooseautoincrement2 = _interopRequireDefault(_mongooseautoincrement);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _dbConnection = require('../../config/dbConnection'); var _dbConnection2 = _interopRequireDefault(_dbConnection);

_mongoose2.default.connect(_dbConnection2.default.url);
_mongooseautoincrement2.default.initialize(_mongoose2.default);

const UserSchema = new _mongoose2.default.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await _bcrypt2.default.hash(this.password, 8);
});

UserSchema.plugin(_mongooseautoincrement2.default.plugin, {
  model: "User",
  fiel: "id",
  startAt: 1,
  incrementBy: 1
});

exports. default = _mongoose2.default.model("User", UserSchema);
