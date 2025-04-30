import express from 'express'
import cors from 'cors'

import joyasroutes from './routes/joyas.router.js'
import { joyasLog } from './middleware/joyas.middleware.js'


const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use(joyasLog)


app.use('/joyas', joyasroutes)

app.listen(PORT, console.log(`🍒 Server http://localhost:${PORT}`))