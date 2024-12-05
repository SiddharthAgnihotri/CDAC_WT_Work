import http from "http"
import fs from "fs";

const employee=JSON.parse(fs.readFileSync("./Employee.json",'utf-8'))

const department = JSON.parse(fs.readFileSync('./Department.json', 'utf-8'));

const mergedData=employee.map(e=>{
    const dept=department.find(d=>d.dept_id===e.dept_id);
    return{
        ...e,
        "dept_name":dept.dept_name,
        "dept_loc":dept.dept_location
    }
})

console.log(mergedData);
const app=http.createServer((req,res)=>{
   
    if(req.url==='/'){
        res.write(JSON.stringify(mergedData));
        res.end();
    }
})


app.listen(5555,()=>{
console.log("Server started at port 5555");
})



