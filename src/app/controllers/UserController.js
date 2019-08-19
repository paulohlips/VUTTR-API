import User from "../models/User";

class UserController {
  //INDEX

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
      where: { email: req.body.email }
    });
    const user = await User.update(req.body);

    return res.status(201).json({ message: "updated." });
  }

  //checkPass;
}

export default new UserController();
