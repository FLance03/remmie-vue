
const reservation = require("../models/reservation");
const room_service = require("../models/room_service");
const user = require("../models/user");

exports.readOrders = async function readOrders(){
    let retVal = [];
    // let data = {
    //     user_id: '',
    //     reservation_id: '',
    //     service_type: '',
    //     time_serviced: '',

    //     guestname: '',
    //     addinfo: '',
    //     room: '',
    //     status: '',
    // }
    
    await room_service.model.findAll({
        attributes: ['user_id', 'reservation_id', 'service_type', 'time_serviced'],
    }).then(value => {
        //For every record in room_services table, append user and reservation details
        console.log(value);
        for(let i = 0; i <  value.length; i++){ 
            //Users
            // await users.model.findOne({
            //     attributes: ['first_name', 'last_name'],
            //     where: {
            //         user_id: value[i].dataValues.user_id,
            //         user_type: 'guest',
            //         date_deleted: {
            //             [Op.is]: null,
            //         },
            //     },
            // }).then(userValue => {
            //     console.log('USER FOUND-------------------------------');
            //     console.log(userValue);
            //     console.log('-------------------------------');
            //     //Append firstname + lastname into data

            // }).catch(e => {
            //     throw e;
            // });

            //Reservation Details
            // reservation.model.findOne({
            //     attributes: ['room_number', 'room_floor'],
            //     where: {
            //         user_id: ,
            //         date_deleted: {
            //             [Op.is]: null,
            //         },
            //     },
            // }).then(userValue => {
            //     console.log('RESERVATION FOUND-------------------------------');
            //     console.log(userValue);
            //     //Append firstname + lastname into data

            // }).catch(e => {
            //     throw e;
            // });

            //Push data variable into retVal array
        }


    }).catch(e => {
        throw e;
    });
    return retVal;
}