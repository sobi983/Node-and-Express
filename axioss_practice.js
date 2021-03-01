const express = require("express");
app = express();
const axios  = require("axios");
const URl = "http://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=a5a9bef5c257b4e967705ef10b344838";

// axios.get(URl).then(response => console.log(response))
app.get("/",  (req,res) =>{
    axios.get(URl)
    .then(function (response) {
        console.log(response)
        let html = `
                    <strong>${response.data.JSON} <strong>
                   
        `

        res.send(html);
    })
    .catch(function (error) {
     
      console.log(error);
    })

})
const port=process.env.PORT || 4060;
app.listen(port, () => console.log(`Listening at ${port}`))



