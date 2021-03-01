const pool=require("../config/database")

module.exports={
    create:(data,callBack)=>{
        pool.query(`INSERT INTO users(user_name,user_email,user_password) values(?,?,?)`,[

            data.userName,
            data.userEmail,
            data.userPassword
        ],(err,result)=>{
            if(err) return callBack(err)
            else return callBack(null,result)
        }
        )
    }
}