const express=require("express");
const CityController=require("../../controllers/city-controller");
const AirportController=require("../../controllers/airport-controller");

const router=express.Router();

router.post('/city',CityController.create);
router.post('/cities',CityController.createBulk);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.get('/city_airports/:id',CityController.getCityAirports);
router.patch('/city/:id',CityController.update);
router.delete('/city/:id',CityController.destroy);

router.post('/airport',AirportController.create);
router.get('/airport/:id',AirportController.get);
router.get('/airport',AirportController.getAll);
router.patch('/airport/:id',AirportController.update);
router.delete('/airport/:id',AirportController.destroy);

module.exports=router;