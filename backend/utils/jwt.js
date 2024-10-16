const sendToken=(admin,statuscode,res)=>{
    
    //creating jwt token
    const token= admin.getJwtToken();

    //setting cookies
    const options={
        expires:new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME *24 * 60 * 60 * 1000),
        httpOnly:true,
        sameSite: 'None',   // Required for cross-origin cookies
        // secure: process.env.NODE_ENV === 'production'
    }

    res.status(statuscode)
    .cookie('token',token,options)
    .json({
        success:true,
        token,
        admin
    })
}

module.exports=sendToken;