const express = require("express");
const app = express();

emp = [];

app.use(express.json());

app.get("/",(req,res)=>{
   res.send(emp);
})

app.post("/",(req,res)=>{
    let {id,name}=req.body;
    let e={
        id:id,
        name:name
    }

    emp=[...emp,e];
    
    res.status(201).send({
        message: "Employee added successfully",
        employee: e
    });
})

app.put("/",(req,res)=>{
    req.body;
    res.send(emp);
 })

app.delete("/:id",(req,res)=>{
    let idd =parseInt(req.params.id);
    emp=emp.filter(e=>e.id!==idd);
    res.send(emp);
})

app.listen(4444);