const express=require("express");
const router=express.Router();

const Cityroute=require("./city");
const Airportroute=require("./airport");
const Flightroute=require("./flight");

router.use(Cityroute);
router.use(Airportroute);
router.use(Flightroute);

module.exports=router;
