const mongoose=require('mongoose');

const reservationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        trim:true,
        maxLength:[100,"name cannot exceed 100 characters"]
    },
    contactInfo:{
        type:String,
        required:[true,"Please enter your contact number"]
    },
    date:{
        type:Date,
        required:[true,"Please enter date"]
    },
    reservationTime: {
        type: String, 
        required: true,
    },
    peopleCount:{
        type:Number,
        required:[true,"Please enter people count"]
    },
    message:{
        type:String,
        maxLength:[200,"message cannot exceed 200 characters"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;