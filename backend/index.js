const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path:'./env'});
app.get('/',(req,res)=>{
    res.status(200).json('message sent')
})
app.listen(process.env.PORT)