const {CityRepository}=require("../repository/index");

class Cityclass{
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
        try {
            const city=await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response=await this.CityRepository.deleteCity(cityId);
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city=await this.CityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city=await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }

    async getAll(filter){
        try{
            const cities=await this.CityRepository.getAll(filter);
            return cities;
        }catch(error){
            console.log("Something went wrong at Service Layer");
            throw {error};
        }
    }
}

module.exports=Cityclass;