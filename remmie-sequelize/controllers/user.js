const { Op } = require("sequelize");
const user = require("../models/user");

exports.readStaff = async function readStaff(){
    let retVal = [];
    await user.model.findAll({
        attributes: ['first_name','last_name','date_created'],
        where: {
            user_type: 'staff',
            date_deleted: {
                [Op.is]: null,
            },
        },
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}

exports.createStaff = async function createStaff(body){
    let bool = true;
    await user.model.create({
        email: body.email, password: body.password, user_type: 'staff', first_name: body.first_name, last_name: body.last_name,
    }).catch(e => {
        bool = false;
        throw e;
    });
    return bool;
}