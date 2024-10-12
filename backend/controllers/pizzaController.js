const Pizza=require('../models/pizzaModel');


//getPizzas- {{base_url}}/api/v1/menu
exports.getPizzas=async(req,res)=>{
    const pizzas= await Pizza.find();
    return res.status(200).json(pizzas);
}

//Add a new pizza-{{base_url}}/api/v1/menu
exports.newPizza=async(req,res,next)=>{

    const { name, description, price, imageUrl } = req.body;
    const pizza=await Pizza.create({
        name,
        description,
        price,
        imageUrl
    })

    res.status(200).json({
        success:true,
        pizza
    })
}

//Update pizza- {{base_url}}/api/v1/menu/:id
exports.updatePizza=async(req,res,next)=>{
    const {id}=req.params;
    const { name, description, price, imageUrl } = req.body;
    
     // Find pizza by ID and update it
     const updatedPizza = await Pizza.findByIdAndUpdate(
        id,
        { name, description, price, imageUrl },
        { new: true } // Return the updated pizza
    );

    if (!updatedPizza) {
        return res.status(404).json({ message: 'Pizza not found' });
    }

    res.json({ message: 'Pizza updated successfully!', pizza: updatedPizza });

}

//Delete Pizza-{{base_url}}/api/v1/menu/:id
exports.deletePizza=async(req,res,next)=>{
    const pizza=await Pizza.findById(req.params.id);

    if(!pizza){
        return res.status(404).json({
            success:false,
            message:"Pizza not found"
        });
    }

    await pizza.deleteOne();

    res.status(200).json({
        success:true,
        message:"Pizza Deleted"
    })
}