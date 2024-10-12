const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please enter username'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        maxlength:[6,'Password cannot exceed 6 characters'],
        select:false
    }
})

adminSchema.pre('save',async function(next){
    //console.log('onsave',this.password);
    if(!this.isModified('password')){
        next();
    }
    this.password=await bcrypt.hash(this.password,10)
})

adminSchema.methods.getJwtToken =function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}

adminSchema.methods.isValidPassword=async function(enteredPassword){
   return  bcrypt.compare(enteredPassword,this.password)
}

let model=mongoose.model('Admin',adminSchema);

module.exports=model;