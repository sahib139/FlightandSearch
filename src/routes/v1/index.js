const express=require("express");
const CityController=require("../../controllers/city-controller");
const AirportController=require("../../controllers/airport-controller");

const router=express.Router();

router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.delete('/city/:id',CityController.destroy);

router.post('/airport',AirportController.create);
router.get('/airport/:id',AirportController.get);
router.get('/airport',AirportController.getAll);
router.patch('/airport/:id',AirportController.update);
router.delete('/city/:id',AirportController.destroy);

module.exports=router;