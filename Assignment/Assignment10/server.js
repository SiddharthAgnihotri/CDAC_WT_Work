import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js'


const app=express();
dotenv.config({path:'./config.env'})

//middleware
app.use(express.json())
app.use(userRouter)



app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
})