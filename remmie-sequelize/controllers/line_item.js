const { Op } = require("sequelize");
const { line_item } = require("../models/index");

exports.readLineitems = async function readLineitems(){
    let retVal = [];
    await line_item.findAll({
        attributes: ['id','room_service_id','product_id', 'price', 'quantity', 'date_created'],
        where: {
            date_deleted: null,
        },
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}