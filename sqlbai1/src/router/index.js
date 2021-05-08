const route = require("express").Router();
const usermanager = require("./user");
const taskmanager = require("./task");
route.use(usermanager);
route.use(taskmanager);
module.exports = route;