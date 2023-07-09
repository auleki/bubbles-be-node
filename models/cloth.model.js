import { model, Schema } from "mongoose";

const clothSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    brand: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    dateResolved: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default model("Cloth", clothSchema);
