const { user, reservation } = require("../models/index");

exports.readBookingInformation = async function readBookingInformation() {
    let retVal = [];
    let query = await reservation.findAll({
        attributes: ['date_checkin','date_checkout'],
        include: [{
            model: user,
            attributes: ['first_name','last_name'],
            required: true,
        }],
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}