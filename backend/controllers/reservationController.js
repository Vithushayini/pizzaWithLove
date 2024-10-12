const Reservation=require('../models/reservationModel');

//make reservation- {{base_url}}/api/v1/reservation
exports.makeReservation=async(req,res,next)=>{
    try{
        const { name, contactInfo, date,reservationTime, peopleCount,message } = req.body;

        const newReservation=await Reservation.create({
            name,
            contactInfo,
            date,
            reservationTime,
            peopleCount,
            message
        });
        res.status(200).json({
            success:true,
            newReservation
        })
    }catch (error) {
        res.status(500).json({ message: 'Error submitting reservation', error: error.message });
    }

}

//get reservations- {{base_url}}/api/v1/reservation
exports.getReservations=async(req,res,next)=>{
    try{
        const reservations = await Reservation.find().sort({ reservationDate: -1 });
        res.status(200).json(reservations);
    }catch (error) {
        res.status(500).json({ message: 'Error retrieving reservations', error: error.message });
    }
    
}