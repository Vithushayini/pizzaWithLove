const sendToken=(admin,statuscode,res)=>{
    
    //creating jwt token
    const token= admin.getJwtToken();

    //setting cookies
    const options={
        expires:new Date(Date.now() + process.env.COOKIE_EXPIRES_TIM *24 * 60 * 60 * 1000),
        httpOnly:true
    }

    res.status(statuscode)
    .cookie('token',token,options)
    .json({
        success:true,
        token,
        admin
    })
}