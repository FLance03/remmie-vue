const test = require("../models/test");

exports.create = async function create(data) {
    let letssee = [];
    let retVal = await test.model.create({
        data: "Goriiaabb",
        value: "Gwapoaabb",
    }).then(valuesss => {
        letssee.push(valuesss);
    }).catch(e => {
        return e;
    });
    // console.log(letssee);
    return letssee
}

exports.test = function test() {
    return {
        data: 'testData',
        value: 'testValue',
    };
}