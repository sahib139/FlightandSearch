const express = require("express");
const router=express.Router();
const bodyparser = require("body-parser");

const ApiRoutes= require("./routers/index.js");

const { PORT } = require("./config/serverconfig.js");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(bodyparser.urlencoded({extended:true}));

    router.use('/api',ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();