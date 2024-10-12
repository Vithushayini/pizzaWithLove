const express= require('express');
const { makeReservation, getReservations } = require('../controllers/reservationController');
const {isAuthenticatedAdmin}=require('../middlewares/authenticate');
const router= express.Router();

router.route('/reservation').post(makeReservation);

//admin only routes
router.route('/reservation').get(isAuthenticatedAdmin,getReservations);

module.exports=router;