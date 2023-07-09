import { model, Schema } from "mongoose";

const priceSchema = new Schema({
    clothType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
}, {timestamps: true})

export default model("price", priceSchema)