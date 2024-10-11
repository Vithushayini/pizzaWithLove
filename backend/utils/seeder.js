const pizzas=require('../data/pizzas.json');
const Pizza=require('../models/pizzaModel');
const dotenv=require('dotenv');
const connectDatabase=require('../config/database');

dotenv.config({path:'backend/config/config.env'});
connectDatabase();

const seedPizzas=async ()=>{
    try{
        await Pizza.deleteMany();
        console.log('Pizzas deleted');
        await Pizza.insertMany(pizzas);
        console.log('all pizzas added'); 
    }catch(error){
        console.log(error.message); 
    }
    process.exit();
}

seedPizzas();