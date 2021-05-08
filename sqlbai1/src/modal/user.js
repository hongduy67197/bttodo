const sequelize = require("../config/sql-connection");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
    "User",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,            
        },
        age:{
            type: DataTypes.INTEGER},
            address:DataTypes.STRING,            
        },
        {
            freeTableName:true,
        }
)
module.exports = User;