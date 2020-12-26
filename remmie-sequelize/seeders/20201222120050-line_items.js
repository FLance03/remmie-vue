'use strict';

const str = require('@supercharge/strings');
const numMax = 100;

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function randomDate(start, end) {
  var date = new Date(+start + Math.random() * (end - start));
  return date;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoLineItems = [];

    
    for(let i=0; i<numMax; i++){
      let start = new Date("July 1, 2020 00:00:00");
      let end = new Date("December 31, 2020 00:00:00");
      let date = randomDate(start, end);
      let room_service_id = between(1, 100);
      let product_id = between(1, 100); 
      let price = between(100, 1000);
      let quantity = between(1, 10);
      demoLineItems.push({
        id: i,
        room_service_id: room_service_id,
        product_id: product_id,
        price: price,
        quantity: quantity,
        date_created: date,
        date_updated: date,
        date_deleted: null,
      })
    }
    return queryInterface.bulkInsert('line_items', demoLineItems);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('line_items', null, {});
  }
};

// id	room_service_id	product_id	price	quantity	date_created	date_updated	date_deleted	
