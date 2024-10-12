const app=require('./app');
const connectDatabase=require('./config/database');
const createAdmin=require('./config/registerAdmin');

connectDatabase();
createAdmin('thadsha', '123456');

const server=app.listen(process.env.PORT,()=>{
    console.log(`my server listening to the port ${process.env.PORT}`);
})