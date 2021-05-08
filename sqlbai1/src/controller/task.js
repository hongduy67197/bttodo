const {Op} = require("sequelize");
const {task} = require("../modal")

exports.getTask = async ({limit =5, page =1, key=""}) =>{
    try {
        const listuser = await task.findAll({
            where:{
                content: {[Op.substring]:key},
            },
            limit:Number(limit), offset:Number((page -1)*limit), });
        console.log(listuser)        
        return listuser;
    } catch (error) {
        
    }
}

exports.createTask = async (body) =>{
    try {
        const newTask = await task.create({...body});
        return newTask;        
    } catch (error) {
        
    }
}

exports.updateTask = async (body) =>{
    try {
        const {id, content, status, address} = body;
        const task1 = await task.findByPk(id);
        task1.content = content;
        task1.status = status;
        task1.address = address;
        await task1.save();
        return task1;
    } catch (error) {
        
    }
}

exports.deleteTask = async (taskid)=>{
try {
    const result = await task.destroy({ where: {id: taskid}});
    return result;
} catch (error) {
    
}
}