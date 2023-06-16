const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/", (req, res)=>{
    var country = req.body.count;
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ddbf711210b97d882315154c0777c4ba"
    https.get(url, (response)=>{
        console.log(response.statusCode);
        response.on("data",(data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            var temperature = weatherData.main.temp;
            var place = weatherData.name;
            var weather = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            var imgUrl =  "https://openweathermap.org/img/wn/"+icon+"@2x.png"
            
            res.write("<p style ='font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;'>The weather in "+place+" is currently "+weather+" <p/>");
            res.write("<h1 style='font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;'>Temperature in "+ place+" is "+temperature+"<h1/>");
            res.write("<img src ='"+imgUrl+"'/>")
            res.write("")
            res.send();
        })
    })
})

app.listen(port, ()=>{
    console.log("running on port "+port);
})