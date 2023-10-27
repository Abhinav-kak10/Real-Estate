import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser'

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("mongodb is connected");
    })
    .catch((err)=>{
        console.log(err);
    });
const app=express();

// allow to use json as input to server
app.use(express.json());

app.use(cookieParser());

app.listen(3000,()=>{
    console.log('server is running on port no 3000');
});

// calling api/user will return userRouter
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

//use middleware to check error
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal Server Error';
    return res.status(statusCode).json({
        sucess: false,
        statusCode,
        message,
    })
})