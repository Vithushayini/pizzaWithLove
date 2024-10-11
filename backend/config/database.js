const mongoose=require('mongoose');

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI)
    .then(con=>{
        console.log(`MongoDB is connected to the host:${con.connection.host}`);
    })
    .catch(err=>{
        console.log('Failed to connect to MongoDB:',err);
        
    })
}

module.exports=connectDatabase;