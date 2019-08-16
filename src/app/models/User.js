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
      type: String
    },
    password: {
      type: String,
      virtual: true,
      required: true
    }
  },
  {
    versionKey: false
  }
);

// asdf asfasdf
UserSchema.pre("save", async function(next) {
  undefined(!this.isModified(""));
});

UserSchema.plugin(autoIncrement.plugin, {
  model: "User",
  fiel: "id",
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("User", UserSchema);
