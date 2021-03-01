const express=require("express")
const app=express();
const mysql=require("mysql")
const dotenv=require("dotenv")
const path=require("path")
const bodyparser=require('body-Parser');


dotenv.config({path: './encryption.env'})

const pool=mysql.createPool({
    connectionLimit : process.env.CONNECTIONLIMIT,
    host            : process.env.HOST,
    user            : process.env.USER,
    password        : process.env.PASSWORD,
    database        : process.env.DATABASE
  })
  
  pool.getConnection((error,result)=>{
      if(error) throw error;
      console.log("Connection established")
  })
  const publicDirectory=path.join(__dirname, './public');
  app.use(express.static(publicDirectory));
  app.set('view engine','hbs');

  //for displaying in a form of JSON
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: false }));

  module.exports=pool;

app.use('/',require('./routes/pages'))
app.use('/sobi',require('./routes/sobi'))

const port=process.env.PORT || 3030;
app.listen(port,()=>console.log(`Listening at port ${port}`))