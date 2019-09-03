"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await _User2.default.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (await !_bcrypt2.default.compare(password, _User2.default.password)) {
      return response.status(400).send({ error: "The password is invalid" });
    }

    return res.status(200).json({
      user: {
        email
      },
      token: _jsonwebtoken2.default.sign({ email }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn
      })
    });
  }
}

exports. default = new SessionController();
