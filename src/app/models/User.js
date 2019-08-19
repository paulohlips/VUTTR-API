import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import bcrypt from "bcrypt";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password_hash: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password_hash")) {
    return next();
  }

  this.password_hash = await bcrypt.hash(this.password_hash, 8);
});

UserSchema.plugin(autoIncrement.plugin, {
  model: "User",
  fiel: "id",
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("User", UserSchema);
