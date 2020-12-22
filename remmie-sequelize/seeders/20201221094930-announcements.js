'use strict';

const str = require('@supercharge/strings');
const numMax=3;

function randomDate(){
    return new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
}

function convertDateTime(date_ob){
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoAnnounce = [];
    for(let i=0; i<numMax; i++){
      let title = str.random(50);
      let description = str.random(100);
      let date = new Date();
      let time = convertDateTime(randomDate());
      demoAnnounce.push({
        id: i+1,
        hotel_id: 1,
        title: title,
        start_time: time,
        end_time: time,
        image: "food1.jpg",
        description: description,
        date_created: date,
        date_updated: date,
        date_deleted: null,
      });
    }
   return queryInterface.bulkInsert('Announcements', demoAnnounce);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Announcements', null, {});
  }
};