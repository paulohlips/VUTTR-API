import User from "../models/User";

class UserController {
  // READ

  async index(req, res) {
    const users = await User.find();
    const { name, email } = users;

    return res.status(200).json({
      users
    });
  }

  // CREATE
  async store(req, res) {
    const { email } = req.body;

    const verification = await User.findOne({ email });

    if (verification) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ message: "Name and email are required." });
    }

    return res.status(201).json({ user });
  }

  // UPDATE
  async update(req, res) {
    const { id } = req.params;

    const userToUpdate = await User.findOne({
      _id: id
    });

    if (!userToUpdate) {
      return res.status(400).json({ message: "User not found." });
    }
    const user = await User.update(req.body);

    return res.status(201).json({ message: "User info has been updated" });
  }

  // DELETE
  async delete(req, res) {
    const userToDelete = await User.findOne({
      _id: req.params.id
    });

    if (!userToDelete) {
      return res.status(400).json({ message: "User not found." });
    }
    const result = await User.deleteOne({ _id: req.params.id });

    return res.status(200).json({ message: "User has been deleted." });
  }
}

export default new UserController();
