const express= require('express');
const path= require('path');
const dotenv= require('dotenv');

const app= express();

dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(express.json());


module.exports=app;
