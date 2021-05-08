const {Op} = require("sequelize");
const {user} = require("../modal")

exports.getUser = async ({limit =5, page =1, key=""}) =>{
    try {
        const listuser = await user.findAll({
            where:{
                name: {[Op.substring]:key},
            },
            limit:Number(limit), offset:Number((page -1)*limit), });
        console.log(listuser)        
        return listuser;
    } catch (error) {
        
    }
}

exports.createUser = async (body) =>{
    try {
        const newUser = await user.create({...body});
        return newUser;        
    } catch (error) {
        
    }
}

exports.updateUser = async (body) =>{
    try {
        const {id, name, age, address} = body;
        const user1 = await user.findByPk(id);
        user1.name = name;
        user1.age = age;
        user1.address = address;
        await user1.save();
        return user1;
    } catch (error) {
        
    }
}

exports.deleteUser = async (userid)=>{
try {
    const result = await user.destroy({ where: {id: userid}});
    return result;
} catch (error) {
    
}
}