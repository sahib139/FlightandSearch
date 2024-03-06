const express=require("express");
const router=express.Router();

const {FlightController}=require("../../controllers/index");

router.post('/flights',FlightController.create);

module.exports=router;