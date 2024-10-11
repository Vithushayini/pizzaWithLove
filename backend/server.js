const app=require('./app');
const connectDatabase=require('./config/database');

connectDatabase();

const server=app.listen(process.env.PORT,()=>{
    console.log(`my server listening to the port ${process.env.PORT}`);
    
})