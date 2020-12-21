const { user, reservation } = require("../models/index");

exports.readBookings = async function() {
    let retVal = [];
    let query = await reservation.findAll({
        attributes: ['first_name','last_name','date_checkin','date_checkout'],
        include: user,
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}