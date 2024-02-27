const express = require("express");

const { PORT } = require("./src/config/serverconfig.js");

const setupAndStartServer = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();