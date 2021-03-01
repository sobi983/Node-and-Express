const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const bodyparser=require('body-Parser');
const mysql = require("mysql");

const port=process.env.PORT || 4040

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pool=mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'employeeDb'
})

app.get('/get',(req,res)=>{

  pool.getConnection(function(err, connection) {
    if (err) throw err; 
   
    
    connection.query('SELECT * FROM employee', function (error, results) {
      
      connection.destroy();
   
      
      if (error) throw error;
      res.send(results)
     
    });
  });

})

app.get('/get/:id',(req,res)=>{

  pool.getConnection(function(err, connection) {
    if (err) throw err; 
   
    
    connection.query('SELECT * FROM employee WHERE EmpID=?',[req.params.id], function (error, results) {
      
      connection.destroy();
   
      
      if (error) throw error;
      res.send(results)
     
    });
  });

})

app.delete('/delete/:id',(req,res)=>{

  pool.getConnection(function(err, connection) {
    if (err) throw err; 
   
    
    connection.query('DELETE FROM employee WHERE EmpID=?',[req.params.id], function (error, results) {
      
      connection.destroy();
   
      
      if (error) throw error;
      res.send(`The employee info has been delete of id ${req.params.id}`)
     
    });
  });

})

app.post('/post',(req,res)=>{

  pool.getConnection(function(err, connection) {
    if (err) throw err; 
   
    
    connection.query('INSERT INTO employee SET ?',[req.body], function (error, results) {
      
      connection.destroy();
   
      
      if (error) throw error;
      res.send(`The employee info has been added of id ${req.params.EmpID}`)//results.query can be used to display the data
     
    });
  });

})

app.put('/put',(req,res)=>{

  pool.getConnection(function(err, connection) {
    if (err) throw err; 
   
    const {EmpID,Name, EmpCode, Salary}=req.body
    connection.query('UPDATE employee SET Name = ? WHERE EmpID = ?', [Name, EmpID] , function (error, results) {
      
      connection.destroy();
   
      
      if (error) throw error;
      res.send(`The employee info has been updated with name: ${Name}`) 
     
    });
  });


});

app.listen(port,()=>console.log(`Listening at ${port}`))
