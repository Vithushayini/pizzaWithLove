const Admin=require('../models/adminModel');
const sendToken=require('../utils/jwt');


//Login Admin- {{base_url}}/api/v1/login
exports.loginAdmin=async (req,res,next)=>{
    const{username,password}=req.body

    if(!email || !password){
        return res.status(400).json({ message: 'please enter username & password' });
    }

    //finding the admin from database
    const admin=await Admin.findOne({username}).select('+password');

    if(!admin){
        return res.status(401).json({ message: 'Invalid username or password'});
    }

    if(!await admin.isValidPassword(password)){
        return res.status(401).json({message: 'Invalid username or password'});
    }

    sendToken(admin,201,res)
}