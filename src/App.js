import express from 'express'
import cors from 'cors'
import allRoutes from './routes/allRoutes.js'

const app = express()
app.set('port', process.env.PORT || 3001)

app.use(cors())
app.use(express.json())

allRoutes.forEach(router => app.use(router))

export default app