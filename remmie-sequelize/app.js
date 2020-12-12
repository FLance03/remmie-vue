const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/read/usertype',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.send(req.query['choice']);
});

app.get('/read/staff',(req,res)=>{
    let test = [
        {"staffName":"VincentA","dateCreated":"January 2, 2020"},
        {"staffName":"VincentB","dateCreated":"January 2, 2020"},
        {"staffName":"VincentC","dateCreated":"January 2, 2020"},
        {"staffName":"VincentD","dateCreated":"January 2, 2020"},
        {"staffName":"VincentE","dateCreated":"January 2, 2020"},
        {"staffName":"VincentF","dateCreated":"January 2, 2020"},
        {"staffName":"VincentG","dateCreated":"January 2, 2020"},
        {"staffName":"VincentH","dateCreated":"January 2, 2020"},
        {"staffName":"VincentI","dateCreated":"January 2, 2020"},
        {"staffName":"VincentJ","dateCreated":"January 2, 2020"},
        {"staffName":"VincentK","dateCreated":"January 2, 2020"},
        {"staffName":"VincentL","dateCreated":"January 2, 2020"},
        {"staffName":"VincentM","dateCreated":"January 2, 2020"},
        {"staffName":"VincentN","dateCreated":"January 2, 2020"},
        {"staffName":"VincentO","dateCreated":"January 2, 2020"},
        {"staffName":"VincentP","dateCreated":"January 2, 2020"},
        {"staffName":"VincentQ","dateCreated":"January 2, 2020"},
        {"staffName":"VincentR","dateCreated":"January 2, 2020"},
        {"staffName":"VincentS","dateCreated":"January 2, 2020"},
        {"staffName":"VincentT","dateCreated":"January 2, 2020"},
        {"staffName":"VincentU","dateCreated":"January 2, 2020"},
        {"staffName":"VincentV","dateCreated":"January 2, 2020"},
        {"staffName":"VincentW","dateCreated":"January 2, 2020"},
        {"staffName":"VincentX","dateCreated":"January 2, 2020"},
        {"staffName":"VincentY","dateCreated":"January 2, 2020"},
        {"staffName":"VincentZ","dateCreated":"January 2, 2020"},
    ];
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.send(JSON.stringify(test));
});
app.get('/read/bookinginformation',(req,res)=>{
    let test = [
        {"userName":"VincentA","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentB","dateBooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentC","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentD","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentE","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentF","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentG","dateBooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentH","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentI","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentJ","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentK","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentL","dateBooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentM","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentN","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentO","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentP","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentQ","dateBooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentR","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentS","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentT","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentU","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentV","datebooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentW","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentX","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentY","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentZ","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentAA","dateBooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentBB","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentCC","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentDD","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentEE","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentFF","dateBooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentGG","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentHH","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentII","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentJJ","dateBooked":"January 2, 2020 - February 4, 2020","status":"Incoming"},
        {"userName":"VincentKK","dateBooked":"January 4, 2020 - February 5, 2020","status":"Checked In"},
        {"userName":"VincentLL","dateBooked":"January 5, 2020 - February 8, 2020","status":"Checked In"},
        {"userName":"VincentMM","dateBooked":"January 8, 2020 - February 9, 2020","status":"Checked Out"},
        {"userName":"VincentNN","dateBooked":"January 9, 2020 - February 9, 2020","status":"Checked Out"},
    ];
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.send(JSON.stringify(test));
});
app.listen('3000',(err)=>{
    if (err) throw err;
    console.log("Listening in Port 3000");
})