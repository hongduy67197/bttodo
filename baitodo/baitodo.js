const express = require("express");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use('/static', express.static(path.resolve(__dirname, './asset')));
app.listen(3010,()=>{
    console.log('server is ready,localhost 3010');
})
let data = [{
    "name": "cong viec a",
    "status": "new",
    "id": "267e0e82-5e08-4dd5-9666-dc438c58b7f1"
}];
app.use(express.json());
app.use(express.urlencoded());
app.get('/api/task',(req,res)=>{
    const user = [];
    res.json({
        data,
        id: uuidv4(),
    })
})
app.post('/api/task',(req,res)=>{
    req.body.id = uuidv4();
    data.push(req.body);
    res.json({
        message: 'post is done',
       data:data
    })
})
app.get('/api/task/:taskId',(req,res)=>{
    // console.log(req.params.taskId);
    data.filter(function (element) {
        if(element.id == req.params.taskId){
            res.json(element);
        }
        return true
    })
})
app.put('/api/task/:taskId',(req,res)=>{
    console.log(req.params.taskId);
    let index = data.findIndex((item)=>{
        return item.id = req.params.taskId;
    })
    data[index] = {...data[index],...req.body};
    res.json({data});
})
app.delete('/api/task/:taskId',(req,res)=>{
    console.log(req.params.taskId);
    data = data.filter((item)=> item.id !== req.params.taskId);
    res.json({data:data,mess:'delete'});
})