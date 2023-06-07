import express from 'express'
import helloWorldRoutes from './6-routes/helloWorldRoute'

const app = express()
app.use(express.json()) // lets our server know that the transactions are going to be in json. So when we get data, we want to treat it as json and parse it as json.

app.use('/api/helloworld', helloWorldRoutes)

export default app
