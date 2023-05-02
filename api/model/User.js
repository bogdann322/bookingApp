import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const UserShema = new Schema(
	{
		username: {
			type: String,
			require: true,
			unique: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean,
			require: true,
            default: false
		},
	},
	{ timestamps: true }
)

export default mongoose.model('User', UserShema)
