const { Op } = require("sequelize");
const announcement = require("../models/announcement");

exports.readAnnouncements = async function readAnnouncements(){
    let retVal = [];
    let query = await announcement.model.findAll({
        attributes: ['title','description','start_time','end_time', 'image'],
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