import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const RoomShema = new Schema(
	{
		title: {
			type: String,
			require: true,
			unique: true,
		},
		price: {
			type: Number,
			require: true,
		},
		maxPerson: {
			type: Number,
			require: true,
		},
		desc: {
			type: String,
			require: true,
		},
		roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
	},
	{ timestamps: true }
)

export default mongoose.model('Room', RoomShema)