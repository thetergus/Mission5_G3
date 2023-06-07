import mongoose from 'mongoose'
import env from 'dotenv'
env.config()

mongoose.connect(process.env.MONGODB_URI_LOCAL!)

export const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Database is connected')
})
