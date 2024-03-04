const {AirportService}=require("../services/index");

const airportService=new AirportService();

const create=async (req,res)=>{
    try {
        const airport=await airportService.createAirport(req.body);
        return res.status(2001).json({
            data:airport,
            success:true,
            message:"successfully created the airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to create the airport",
            err:error,
        });
    }
};

const destroy=async (req,res)=>{
    try {
        const response=await airportService.createAirport(req.params.airportId);
        return res.status(2001).json({
            data:response,
            success:true,
            message:"successfully deleted the airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to delete the airport",
            err:error,
        });
    }
};

const update=async (req,res)=>{
    try {
        const airport=await airportService.createAirport(req.body,req.params.airportId);
        return res.status(2001).json({
            data:airport,
            success:true,
            message:"successfully updated the airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to update the airport",
            err:error,
        });
    }
};

const get=async (req,res)=>{
    try {
        const airport=await airportService.createAirport(req.params.airportId);
        return res.status(2001).json({
            data:airport,
            success:true,
            message:"successfully fetched the airport",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch the airport",
            err:error,
        });
    }
};

const getAll=async (req,res)=>{
    try {
        const airport=await airportService.createAirport(req.query);
        return res.status(2001).json({
            data:airport,
            success:true,
            message:"successfully fetched the airports",
            err:{},
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch the airports",
            err:error,
        });
    }
};

module.exports={
    create,
    destroy,
    update,
    get,
    getAll
}