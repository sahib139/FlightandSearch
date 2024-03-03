const express = require("express");
const bodyparser = require("body-parser");

const ApiRoutes= require("./routes/index.js");

const { PORT } = require("./config/serverconfig.js");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();