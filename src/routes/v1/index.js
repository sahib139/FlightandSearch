const express=require("express");
const router=express.Router();

const Cityroute=require("./city");
const Airportroute=require("./airport");

router.use(Cityroute);
router.use(Airportroute);

module.exports=router;
