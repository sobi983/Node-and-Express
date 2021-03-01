const express=require('express')
const app=express()
const dotenv=require("dotenv")
const userRouter=require('./api/user_router')

dotenv.config({path: './config/encryption.env' })

app.use("/api",userRouter)
app.use(express.json())

app.listen(process.env.APP_PORT_NO,(error)=>{
    if(error) throw error
    console.log(`Listening at port ${process.env.APP_PORT_NO}`)
})  