const express = require('express');
const https = require('https');
const port = 8080;
const app = express();

app.get('/', (req, res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ddbf711210b97d882315154c0777c4ba"
    https.get(url, (response)=>{
        console.log(response.statusCode);
        response.on("data",(data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            var temperature = weatherData.main.temp
            var place = weatherData.name
            res.send("<h1 style='font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;'>Temperature in <h1/>"+ place+"<h1 style='font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;'> is <h1/>"+temperature);
        })
    })
})

app.listen(port, ()=>{
    console.log("running on port "+port);
})