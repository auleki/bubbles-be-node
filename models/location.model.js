import { Schema, model } from "mongoose";

const locationSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default model("location", locationSchema)