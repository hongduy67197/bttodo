const Sequelize = require("sequelize");
const sequelize = new Sequelize("Nodemy_Tutorial","root","190397050197",{
    host:"localhost",
    dialect:"mysql",
    logging: true,
    sync:true
});
sequelize.sync();

module.exports = sequelize;