const { Op } = require("sequelize");
const {announcement} = require("../models/index");

function convertDateTime(date_ob){
    // let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}

// finish this and update modalAnn
exports.createAnnouncements = async function createStaff(body){
    let bool = true;
    let date = new Date();
    // console.log(date);
    // console.log(body.starttime);
    // console.log(body.starttime.slice(0, 19).replace('T', ' '));
    body.starttime = body.starttime.slice(0, 19).replace('T', ' ');
    body.endtime = body.endtime.slice(0, 19).replace('T', ' ');

    await announcement.create({
        hotel_id: 1, 
        title: body.title, 
        start_time: body.starttime, 
        end_time: body.endtime,
        image: body.filename,
        description: body.description,
        date_created: date,
        date_updated: date,
        date_deleted: null,
    }).then(function(){
        console.log("Success");
    }).catch(e => {
        bool = false;
        throw e;
    });
    return bool;
}

/*

id 
hotel_id 
title 
start_time 
end_time 
image 
description 
date_created 
date_updated 
date_deleted

*/

exports.readAnnouncements = async function readAnnouncements(){
    let retVal = [];
    await announcement.findAll({
        attributes: ['title','description','start_time','end_time', 'image'],
        where: {
            // latest 5 announcements
            date_deleted: null,
        },
        order: [['start_time', 'DESC']]
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}



