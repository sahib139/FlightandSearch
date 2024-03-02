const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require("./config/serverconfig.js");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();