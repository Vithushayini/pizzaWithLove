const express= require('express');
const path= require('path');
const dotenv= require('dotenv');
const cookieParser= require('cookie-parser');
const cors = require('cors');


const app= express();
app.use(cors());

dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(express.json());
app.use(cookieParser());

const auth=require('./routes/auth');
const pizzas=require('./routes/pizza');
const reservations=require('./routes/reservation');

app.use('/api/v1/',auth);
app.use('/api/v1/',pizzas);
app.use('/api/v1/',reservations);


module.exports=app;
