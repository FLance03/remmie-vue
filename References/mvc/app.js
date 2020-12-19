const express = require("express");
const app = express();
const control = require("./controllers/testController");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", async (req,res)=>{
    // await test.model.findAll({
    //     where: {
    //         data: 'Hello'
    //     }
    // }).then(value => {
    //     res.send(value);
    // }).catch(e => {
    //     res.send(e);
    // });
    let value = await control.create({
        data: "Gorii",
        value: "Gwapo",
    });
    // let value2 = await test.model.create({
    //     data: "Gorii",
    //     value: "Gwapo",
    // }).then(value => {
    //     res.send(value);
    // }).catch(e => {
    //     return e;
    // });
    res.send(value);
});

app.get('/accounts/users', (req,res)=>{
    let response =  control.test();

// res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
// res.setHeader('Access-Control-Allow-Methods','GET');
// res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
// res.setHeader('Access-Control-Allow-Credentials',true);
    res.send(response);
    
});
app.post('/accounts/users',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.send('aa');
});
app.listen('3001',(err)=>{
    if (err) throw err;
    console.log('Connected to port 3000');
});