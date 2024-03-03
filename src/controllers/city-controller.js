const {CityService, CityService}=require("../services/index");

const cityService=new CityService();

//post(method) -> /city ,data in body
const create=async (req,res)=>{
    try {
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data :city,
            sucess:true,
            message:"successfully created a city",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer due to"+error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:"Not able to create the city",
            err: error
        });
    }
}

// delete (method)-> /city/:id
const destroy=async (req,res)=>{
    try {
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data :response,
            sucess:true,
            message:"successfully deleted a city",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer due to"+error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:"Not able to delete the city",
            err: error
        });
    }
}

// patch (method) -> /city/:id + data in body
const update=async (req,res)=>{
    try {
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data :city,
            sucess:true,
            message:"successfully deleted a city",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer due to"+error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:"Not able to update the city",
            err: error
        });
    }
}

//get (method) -> /city/:id
const get=async (req,res)=>{
    try {
        const city=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data :city,
            sucess:true,
            message:"successfully fetched a city",
            err:{}
        });
    } catch (error) {
        console.log("Something went wrong at controller layer due to"+error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:"unable to fetch the city",
            err: error
        });
    }
}

module.exports={
    create,
    get,
    update,
    destroy,
}