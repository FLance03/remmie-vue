const { Op } = require("sequelize");
const user = require("../models/user");

exports.readStaff = async function readStaff(){
    let retVal = [];
    let query = await user.model.findAll({
        attributes: ['first_name','last_name','date_created'],
        where: {
            user_type: 'staff',
            date_deleted: {
                [Op.not]: null,
            },
        },
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}