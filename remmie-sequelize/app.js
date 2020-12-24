const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const cors = require('cors');
const app = express();
const usertype = 'staff'; // DELETE afterwards
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//Controllers
const user = require("./controllers/user");
const room_service = require("./controllers/room_service");
const announcements = require("./controllers/announcement");
const reservation = require("./controllers/reservation");
const line_items = require("./controllers/line_item");

app.get('/isloggedin', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(false);
});

app.post('/authenticate', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    let data = false;
    console.log(req.body.email)
    if (req.body.email!=undefined && req.body.password!=undefined){
        let {authenticate, type} = await user.authenticate(req.body.email,req.body.password);
        if (authenticate == true){
            // Authenticated so i guess dinhi ang setting sa session?
            // type kay ang user type
            console.log(type);
            res.send(true);
        }else {
            res.send(false);
        }
    }else {
        res.send(false);
    }

});


//READING QUERIES-----------------------------------------------------------------------
app.get('/read/usertype', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(usertype);
});

app.get('/read/lineitems', async (req,res)=>{
    let data = await line_items.readLineitems();
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.send(JSON.stringify(data));
});

app.get('/read/announcements', async (req,res)=>{
    let data = await announcements.readAnnouncements();
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(data));
});

app.get('/read/staff', async (req, res) => {
    let data = await user.readStaff();
    let response = [];
    for (let i = 0; i < data.length; i++) {
        response.push({
            "staffName": data[i].first_name + ' ' + data[i].last_name,
            "dateCreated": data[i].date_created.toDateString().slice(4),
        });
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(response));
    // let test = [
    //     {"staffName":"VincentA","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentB","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentC","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentD","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentE","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentF","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentG","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentH","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentI","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentJ","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentK","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentL","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentM","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentN","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentO","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentP","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentQ","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentR","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentS","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentT","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentU","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentV","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentW","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentX","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentY","dateCreated":"January 2, 2020"},
    //     {"staffName":"VincentZ","dateCreated":"January 2, 2020"},
    // ];
});

app.get('/read/bookinginformation', async (req, res) => {

    let data = await reservation.readBookingInformation();
    let response = [];
    let userName;
    let dateBooked;
    let status;
    let presentDate = new Date();

    for (let i = 0; i < data.length; i++) {
        userName = data[i].user.first_name + ' ' + data[i].user.last_name;
        dateBooked = data[i].date_checkin.toDateString().slice(4) + ' - ' + data[i].date_checkout.toDateString().slice(4);
        if (data[i].date_checkout < presentDate) {
            status = 'Checked Out';
        } else if (presentDate < data[i].date_checkin) {
            status = 'Incoming';
        } else {
            status = 'Checked In';
        }
        response.push({
            "userName": userName,
            "dateBooked": dateBooked,
            "status": status,
        });
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(response));
});

app.get('/read/roomorders', async (req, res) => {

    //Hi sir, this is from our other assumed hotel database smiley face :)
    let orders = [
        { id: 1, prodName: 'Burger King Deluxe Omega', price: 50.0, desc: 'Awesomeness in mouth' },
        { id: 2, prodName: 'Shanghai Lumpia', price: 225.0, desc: 'Awesomeness in mouth' },
        { id: 3, prodName: 'Mixed Seafood Chowder', price: 195.0, desc: 'Awesomeness in mouth' },
        { id: 4, prodName: 'Baked Scallop', price: 285.0, desc: 'Awesomeness in mouth' },
        { id: 5, prodName: 'Cream of Mushroom Soup', price: 150.0, desc: 'Awesomeness in mouth' },
        { id: 6, prodName: 'Pork Baby Backribs', price: 450.0, desc: 'Awesomeness in mouth' },
    ];

    let data = await room_service.readOrders();
    let response = [];

    let username;
    let room;
    let order;
    let status;

    for (let i = 0; i < data.length; i++) {
        username = data[i].user.first_name + ' ' + data[i].user.last_name;
        order = data[i].line_items[0].quantity + ' ' + orders[data[i].line_items[0].product_id].prodName;
        room = 'Room ' + data[i].reservation.room_number + ' Floor #' + data[i].reservation.room_floor;
        status = (data[i].time_serviced == null) ? 'PENDING' : 'FINISHED',
        response.push({
            "username": username,
            "orders": order,
            "room": room,
            "status": status,
            "id": data[i].id
        });
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(response));
});

app.get('/read/roomcleaning', async (req, res) => {
    let data = await room_service.readCleaning();
    let response = [];
    let username;
    let room;
    let status;
    for (let i = 0; i < data.length; i++) {
        username = data[i].user.first_name + ' ' + data[i].user.last_name;
        room = 'Room ' + data[i].reservation.room_number + ' Floor #' + data[i].reservation.room_floor;
        status = (data[i].time_serviced == null) ? 'PENDING' : 'FINISHED',
        response.push({
            "username": username,
            "room": room,
            "status": status,
            "id": data[i].id
        });
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(response));
});

//WRITING QUERIES-----------------------------------------------------------------------
app.post('/write/staff', async (req, res) => {
    let bool = await user.createStaff(req.body);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(bool));
});

//UPDATING QUERIES-----------------------------------------------------------------------
app.post('/update/roomorder_status', async (req, res) => {
    let bool = await room_service.updateStatus(req.body);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(JSON.stringify(bool));
});

app.listen('3000', (err) => {
    if (err) throw err;
    console.log("Listening in Port 3000");
})