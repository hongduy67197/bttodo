const express = require("express");
const Sequelize = require("./src/config/sql-connection");
const app = express();
const route = require("./src/router");
app.use(express.json());
app.use(route);
app.listen(8000,()=>{
    console.log("server is run in host 8000");
})