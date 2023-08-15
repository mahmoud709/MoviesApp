import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/route.js';
dotenv.config({ path: "./config.env" });

// Db Connection
mongoose.connect(process.env.DBCONNECTION);

const app=express();

app.use(cors())
app.use(express.json())
app.use('/',route)
app.listen(process.env.PORT|5000,(req,res)=>{
    console.log(`App is Running`)
})