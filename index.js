import express from 'express'
import Routes from './src/routes/index.js'
import 'dotenv/config.js'


const PORT = process.env.PORT
const app =express()

app.use(express.json())

app.use(Routes)

app.listen(PORT,()=>console.log(`Server listening in port: ${PORT}`))