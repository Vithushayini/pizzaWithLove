const express= require('express');
const path= require('path');
const dotenv= require('dotenv');
const cookieParser= require('cookie-parser');

const app= express();

dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(express.json());
app.use(cookieParser());

const auth=require('./routes/auth');
const pizzas=require('./routes/pizza');


app.use('/api/v1/',auth);
app.use('/api/v1/',pizzas);


module.exports=app;
