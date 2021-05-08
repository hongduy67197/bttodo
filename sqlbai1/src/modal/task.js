const sequelize = require("../config/sql-connection");
const { DataTypes } = require("sequelize");

const Task = sequelize.define(
    "Task",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        content:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        status:{
            type: DataTypes.STRING, allowNull:false},
    },
    {
        freeTableName:true,
    } 
    )
    module.exports = Task;