import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const ToolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [String]
});

ToolSchema.plugin(autoIncrement.plugin, {
  model: "Tool",
  fiel: "id",
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("Tool", ToolSchema);
