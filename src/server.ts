// // yarn add express dotenv
// // yarn add -D @types/node @types/express ts-node-dev typescript
// // yarn tsc --init
// Uncomment and set "rootDir" and "outDir"

// USING MONGODB
// // yarn add cors mongoose
// // yarn add -D @types/cors @types/mongoose

import app from './app'
import env from 'dotenv'
import mongoose from 'mongoose'
import './3-models/db'

env.config() // calling the environment variables from .env file

const PORT = process.env.PORT
app.listen(PORT || 3000, () => {
  console.log(`server started on port ${PORT}`)
})
