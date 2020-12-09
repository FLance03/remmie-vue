const test = require("../models/test");

exports.create = async function create(data) {
    let retVal = await test.model.create({
        data: "Gorii",
        value: "Gwapo",
    }).then(value => {
        return value
    }).catch(e => {
        return e;
    });
    console.log(retVal);
    return retVal
}

exports.test = function test() {
    return {
        data: 'testData',
        value: 'testValue',
    };
}