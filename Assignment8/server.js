const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    if (req.url === '/') {
        fs.readFile('employee.json','utf8',(err,employeeData) => {
            if (err) {
                res.writeHead(500,{ 'content-type': 'text/plain'});
                res.end('Error reading employee.json');
                return;
            }
            fs.readFile('departmenyt.json','utf8',(err,departmentData) => {
                if (err) {
                    res.writeHead(500,{ 'content-type': 'text/plain'});
                    res.end('Error reading department.json');
                    return;
                }
                const employees = JSON.parse(employeeData);
                const departments = JSON.parse(departmentData);
                const mergedata = employees.map( emp => {
                    const dept = departments.find(d => d.deptId === emp.deptId);
                    return {
                        empId: emp.empId,
                        ename: emp.ename,
                        city: emp.city,
                        deptId: dept ? dept.deptId :'N/A',
                        location: dept ? dept.location : 'N/A'
                    };
                });
                fs.readFile('index.html','utf8',(err,htmlcontent) => {
                    if (err) {
                        res.writeHead(500,{ 'content-type': 'text/plain'});
                        res.end('Error reading index.html');
                        return;
                    }
                    let tableRows = '';
                    mergedata.forEach(emp => {
                        tableRows += `<tr>
                            <td>${emp.empId}</td>
                            <td>${emp.ename}</td>
                            <td>${emp.city}</td>
                            <td>${emp.deptId}</td>
                            <td>${emp.location}</td>
                        </tr>`;
                    });
                    htmlcontent = htmlcontent.replace('<!-- TABLE-ROWS -->',tableRows);
                    res.writeHead(200,{ 'content-type': 'text/html'});
                    res.end(htmlcontent);
        });
    });
});
    } else{
        res.writeHead(404,{ 'content-type': 'text/plain'});
        res.end('Not Found'); 
    }
}).listen(5555, '0.0.0.0', () => {
    console.log('Server Running at http://localhost:5555');
});