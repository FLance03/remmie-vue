const { user } = require("../models/index");

exports.readStaff = async function readStaff(){
    let retVal = [];
    let query = await user.findAll({
        attributes: ['first_name','last_name','date_created'],
        where: {
            user_type: 'staff',
        },
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}