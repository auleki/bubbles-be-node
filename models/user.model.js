import { Schema, model } from "mongoose";

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	location: {
		state: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		area: {
			type: String,
			required: true,
		},
	},
	phone: {
		type: String,
		required: true,
	},
	points: {
		type: Number,
		default: 0
	},
	orders: {
		ref: "Order",
		type: [Schema.Types.ObjectId],
	},
	rewards: {
		ref: "Reward",
		type: [Schema.Types.ObjectId],
	},
}, {timestamps: true});

export default model("User", userSchema);
