const Joi=require('joi') //AS per the naming convention i wrote the variable name with a capital name because it returns the class
const express=require('express')
const app=express()
app.use(express.json())
const port=process.env.PORT || 4060;

obj=[
    {id : 1, name: "sobi"},
    {id : 2, name: "fayez"},
    {id : 3, name: "srosh"},
    {id : 4, name: "hassasm"},
    {id : 5, name: "mini"},
]
app.get("/",(req,res)=>{
    res.send("Hello");
});


app.post('/alien',(req,res)=>{
   const schema={
       name:Joi.string().min(2).required()
   }
  const re=Joi.validate(req.body,schema);
  console.log(re)
  if(re.error){
      res.status(404).send(re.error.detail[0].message)
  }

    const course= { 
        id:obj.length + 1,
             name:req.body.name
     }
    
   obj.push(course);
   res.send(course)
})

app.put('/alien/:id',(req,res)=>{
    const found=obj.find(c => c.id == parseInt(req.params.id))
    if(!found){
        res.status(404).send("Such site not found Eroor 404!!")
    }

    const schema={
        name:Joi.string().min(2).required()
    }
   const re=Joi.validate(req.body,schema);
   if(re.error){
    res.status(404).send(re.error.detail[0].message)
   }

    found.name=req.body.name
     res.send(found)
   

})

app.get('/alien/:id',(req,res)=>{
    const found=obj.find(c => c.id == req.params.id)
    if(!found){
        res.status(404).send("Such site not found Eroor 404!!")
    }
    res.send(found)
}).listen(port,()=>console.log(`listening to the server ${port}`))