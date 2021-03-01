const {create}=require("./user_service")
const bcrypt=require("bcrypt")

module.exports={
    createUser:(req,res)=>{
     const body=req.body
     body.userPassword=bcrypt.hashSync(body.userPassword,bcrypt.genSaltSync(10))
     create(body,(err,results)=>{
         if(err){
             console.log(err)
             return res.status(500).json({
                 success:0,
                 message:"DB connection error"
             });
         }
         return res.status(200).json({
             success:1,
             data:results
         })
     })
   
    }
}  