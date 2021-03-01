const mysql=require("mysql")
const dotenv=require("dotenv")

dotenv.config({path:' /encryption.env   '})

const pool=mysql.createPool({
    connectionLimit : process.env.CONNECTIONLIMIT,
    host            : process.env.HOST,
    user            : 'root',
    password        : process.env.PASSWORD,
    database        : 'loginform'
})




 


module.exports=pool