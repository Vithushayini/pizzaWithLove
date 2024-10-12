const express= require('express');
const { getPizzas, newPizza, updatePizza, deletePizza } = require('../controllers/pizzaController');
const router= express.Router();
const {isAuthenticatedAdmin}=require('../middlewares/authenticate');
const multer=require('multer');
const path=require('path');

// const upload=multer({storage: multer.diskStorage({
//     destination:function(req, file, cb){
//         cb(null,path.join(__dirname,'..' , 'uploads/product'))
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// }) })

router.route('/menu').get(getPizzas);

//admin only routes
router.route('/menu').post(isAuthenticatedAdmin,newPizza);
router.route('/menu/:id').put(isAuthenticatedAdmin,updatePizza);
router.route('/menu/:id').delete(isAuthenticatedAdmin,deletePizza);


module.exports=router;