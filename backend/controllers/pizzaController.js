const Pizza=require('../models/pizzaModel');


//getPizzas- {{base_url}}/api/v1/menu
exports.getPizzas=async(req,res)=>{
    const pizzas= await Pizza.find();
    return res.status(200).json(pizzas);
}