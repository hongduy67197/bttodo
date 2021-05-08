const user = require("./user");
const task = require("./task");

// user.hasMany(task, { foreignKey: {name: "userid" }, as: "tasks"});
// task.belongTo(user, {foreignKey:{name:"userid"}});


module.exports = {
    user,
    task,
}
