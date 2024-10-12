const jwt=require('jsonwebtoken');
const Admin=require('../models/adminModel');

exports.isAuthenticatedAdmin= async(req,res,next)=>{
    const {token}=req.cookies;

    if(!token){
        return res.status(403).json({message:'Access denied. No token provided'});
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await Admin.findById(decoded.id);
    next();
}