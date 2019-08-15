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

UserSchema.virtual("fullName").get(function() {
  return `${this.name} ${this.email}`;
});

// UserSchema.pre("save", async next => {
//   if (this.password) {
//     this.password_hash = await bcrypt.hash(this.password, 8);
//     next();
//   }
// });

UserSchema.plugin(autoIncrement.plugin, {
  model: "User",
  fiel: "id",
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("User", UserSchema);
