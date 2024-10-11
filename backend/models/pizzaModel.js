const mongoose=require('mongoose');

const pizzaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter pizza's name"],
        trim:true,
        maxLength:[100,"Pizza name cannot exceed 100 characters"]
    },
    description:{
        type:String,
        required:[true,"Please enter pizza description"]
    },
    price:{
        type:Number,
        default:0.0
    },
    imageUrl: {
        type: String,
        required: [true, 'Pizza image URL is required']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

let schema=mongoose.model('pizza',pizzaSchema);

module.exports=schema;