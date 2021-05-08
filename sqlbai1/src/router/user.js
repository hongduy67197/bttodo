const express = require("express");
const userRoute = express.Router();
const { user } = require("../controller")

userRoute.get('/user', async (req,res)=>{
    const query = req.query;
    console.log(query)
    const data = await user.getUser(query);
    res.json({
        data
    });
});
userRoute.post('/user', async (req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await user.createUser(body);
    res.json({data});
});
userRoute.put('/user', async (req,res)=>{
    const body = req.body;
    const data = await user.updateUser(body);
    res.json([data]);
})
userRoute.delete('/user/:userId', async (req,res)=>{
    const userid = req.params.userid;
    const data =  await user.deleteUser(userid);
    res.json({data});

})
module.exports = userRoute;