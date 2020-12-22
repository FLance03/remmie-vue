const { user, room_service, reservation, line_item } = require("../models/index");

exports.readOrders = async function readOrders() {
    let retVal = [];
    await room_service.findAll({
        attributes: ['id', 'time_serviced'],
        include: [{
            model: user,
            attributes: ['first_name', 'last_name'],
            required: true,
        },
        {
            model: reservation,
            attributes: ['room_number', 'room_floor'],
            required: true,
        },
        {
            model: line_item,
            attributes: ['product_id', 'quantity'],
            required: true,
        }],
        where: {
            service_type: 1,
        },
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}

exports.readCleaning = async function readCleaning() {
    let retVal = [];
    await room_service.findAll({
        attributes: ['id', 'time_serviced'],
        include: [{
            model: user,
            attributes: ['first_name', 'last_name'],
            required: true,
        },
        {
            model: reservation,
            attributes: ['room_number', 'room_floor'],
            required: true,
        }],
        where: {
            service_type: 0,
        },
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}

exports.updateStatus = async function updateStatus(body) {
    let bool = true;
    let presentDate = new Date();
    await room_service.update({
        time_serviced: presentDate,
    }, {
        where: {
            id: body.id
        }
    }).catch(e => {
        bool = false;
        throw e;
    });
    return bool;
}