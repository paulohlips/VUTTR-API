"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // READ

  async index(req, res) {
    const users = await _User2.default.find();
    const { name, email } = users;

    return res.status(200).json({
      users
    });
  }

  // CREATE
  async store(req, res) {
    const { email } = req.body;

    const verification = await _User2.default.findOne({ email });

    if (verification) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await _User2.default.create(req.body);

    if (!user) {
      return res.status(400).json({ message: "Name and email are required." });
    }

    return res.status(201).json({ user });
  }

  // UPDATE
  async update(req, res) {
    const { id } = req.params;

    const userToUpdate = await _User2.default.findOne({
      _id: id
    });

    if (!userToUpdate) {
      return res.status(400).json({ message: "User not found." });
    }
    const user = await _User2.default.update(req.body);

    return res.status(201).json({ message: "User info has been updated" });
  }

  // DELETE
  async delete(req, res) {
    const userToDelete = await _User2.default.findOne({
      _id: req.params.id
    });

    if (!userToDelete) {
      return res.status(400).json({ message: "User not found." });
    }
    const result = await _User2.default.deleteOne({ _id: req.params.id });

    return res.status(200).json({ message: "User has been deleted." });
  }
}

exports. default = new UserController();
