import { model, Schema } from "mongoose";

const queueSchema = new Schema(
  {
    orders: [],
    express: []
  },
  { timestamps: true }
);

export default model("Queue", queueSchema);
