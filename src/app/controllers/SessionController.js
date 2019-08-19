import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const email = req.body.email;

    console.log("BOOOOODY", email);

    const user = await User.findOne({ where: { email: email } });
    console.log("BOOOOODY2", user);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    /*    if (!(await User.checkPass(password))) {
      return res.status(401).json({ error: "Incorrect Password" });
    } */

    return res.json({
      user: {
        email
      },
      token: jwt.sign({ email }, "00f5befa70d5484ce41fde5e50911c02", {
        expiresIn: "1d"
      })
    });
  }
}

export default new SessionController();
