const express = require("express");
const bodyparser = require("body-parser");

const db=require("./models/index");
const {Airport,City}=require("./models/index.js");

const ApiRoutes= require("./routes/index.js");

const { PORT , DB_SYNC } = require("./config/serverconfig.js");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(DB_SYNC===true){
            await db.sequelize.sync({ alter: true });
            console.log("Databased Synced!");
        }
        const city=await City.findOne({
            where:{
                id:3,
            }
        });
        const airports=await city.getAirports();
        console.log("yo",airports);
    });
}

setupAndStartServer();