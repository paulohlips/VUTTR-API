import User from "../models/User";

class UserController {
  //READ

  async index(req, res) {
    const users = await User.find();
    const { name, email } = users;
    return res.status(200).json({
      users
    });
  }

  //CREATE
  async store(req, res) {
    const user = await User.create(req.body);

    return res.status(201).json({ user });
  }

  //UPDATE
  async update(req, res) {
    const userToUpdate = await User.findOne({
      id: req.body.id
    });

    if (!userToUpdate) {
      return res.status(400).json({ message: "User not found." });
    }
    const user = await User.update(req.body);

    return res.status(204).json({ message: "User has been modified." });
  }

  //DELETE
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
