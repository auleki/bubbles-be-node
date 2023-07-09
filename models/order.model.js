import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    clothes: {
        type: Array,
        ref: 'Cloth'
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true
    }

}, {timestamps: true})

export default model('Order', ordersSchema)