const express = require('express');
const http = require('http');
const port = 8080;
const app = express();

app.get('/', (req, res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ddbf711210b97d882315154c0777c4ba"
    res.send("Hello")
    http.get(url)
})

app.listen(port, ()=>{
    console.log("running on port "+port);
})