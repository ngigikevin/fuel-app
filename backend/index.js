const express = require('express');
const dotenv = require('dotenv');
const app = express();
const userRouter = require('./routers/userRouter');
dotenv.config({path:'./.env'});
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).json('message sent')
})
app.use('/api/v1/user',userRouter);

module.exports = app;
