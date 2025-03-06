import express from 'express';
import { seasonRouter } from './routes/season.js';

const app = express()

const PORT = process.env.PORT ?? 3000
app.use(express.json())
app.disable('x-powered-by')


//Middleware for requestes api/season will be use seasonRouter
app.use("/f1api/seasons", seasonRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})