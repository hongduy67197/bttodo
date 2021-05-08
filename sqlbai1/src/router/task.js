const express = require("express");
const taskRoute = express.Router();
const { task } = require("../controller")

taskRoute.get('/user', async (req,res)=>{
    const query = req.query;
    console.log(query)
    const data = await task.getTask(query);
    res.json({
        data
    });
});
taskRoute.post('/user', async (req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await task.createTask(body);
    res.json({data});
});
taskRoute.put('/user', async (req,res)=>{
    const body = req.body;
    const data = await task.updateTask(body);
    res.json([data]);
})
taskRoute.delete('/user/:userId', async (req,res)=>{
    const userid = req.params.userid;
    const data =  await task.deleteTask(userid);
    res.json({data});

})
module.exports = taskRoute;