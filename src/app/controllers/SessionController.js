import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User";
import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (await !bcrypt.compare(password, User.password)) {
      return response.status(400).send({ error: "The password is invalid" });
    }

    return res.status(200).json({
      user: {
        email
      },
      token: jwt.sign({ email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
