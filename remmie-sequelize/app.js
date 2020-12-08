const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/read/usertype',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.send('admin');
});

app.listen('3000',(err)=>{
    if (err) throw err;
    console.log("Listening in Port 3000");
})