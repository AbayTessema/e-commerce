import express from 'express';
import connectDB from './config/db.js'
import dotenv from 'dotenv';
import cors from 'cors';
import productRouter from './routers/productRouter.js'

dotenv.config();
const app= express();
const PORT= process.env.PORT;
app.use(express.json());
app.use(cors());

app.use('/products',productRouter)

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}...`)
})


//npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion