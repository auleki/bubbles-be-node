import { model, Schema } from "mongoose";

const clothSchema = new Schema(
  {
    imageLink: String,
    material: {
      type: String,
      required: true,
      unique: true
    },
    brand: String,
    price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default model("Cloth", clothSchema);
