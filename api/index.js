import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
dotenv.config()

import authRouter from './routes/auth.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'
import usersRouter from './routes/users.js'


const app = express()

mongoose
	.connect(process.env.MONGO)
	.then(() => console.log('DB OK'))
	.catch(() => console.log('DB ERROR'))

app.get("/", (req, res)=> {
    res.send("Hello world")
})

//midleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/auth',authRouter)
app.use('/hotel', hotelsRouter)
app.use('/room', roomsRouter)
app.use('/user', usersRouter)

app.use((err,req,res,next)=>{
	const errStatus = err.status || 500
	const errMessage = err.message || "Something went wrong"
	return res.status(err.status).json({
		success: false,
		status: errStatus,
		message: errMessage,
		stack: err.stack
	})
})

app.listen(8000, () => {
	console.log('Server is running')
})
