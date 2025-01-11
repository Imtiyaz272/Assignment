import express from 'express';
import {PORT, mongoURL} from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import cron from 'node-cron';
import axios from 'axios';

const app = express();
app.use(express.json());

mongoose.connect(mongoURL).then(()=>{
    console.log("Database is connected");
})
.catch((error) => {
    console.log(error);
})

app.get('/', (req, res)=>{
    return res.status(200).send("Welcome to the backend");
});

app.listen(PORT, ()=>{
    console.log(`App is listening to port : ${PORT}`);
});