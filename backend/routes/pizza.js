const express= require('express');
const { getPizzas } = require('../controllers/pizzaController');
const router= express.Router();

router.route('/menu').get(getPizzas);



module.exports=router;