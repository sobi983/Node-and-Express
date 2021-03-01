const {createUser}=require('./user_controller')
const express = require("express")
// const bodyparser=require('body-Parser');
const app = express();
const router=express.Router();
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));


router.post("/post",createUser);
module.exports=router