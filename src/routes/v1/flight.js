const express=require("express");
const router=express.Router();

const {FlightController}=require("../../controllers/index");

router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);

module.exports=router;