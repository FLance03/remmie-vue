'use strict';

const { numUsers } = require('./20201220101700-demo-users');
const numRoomServices = numUsers/2;

function randomDate(start, end) {
  var date = new Date(+start + Math.random() * (end - start));
  return date;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoRoomServices = [];
    let start = new Date("July 1, 2020 00:00:00");
    let end = new Date("December 31, 2020 00:00:00");
    for (let i=0 ; i<numUsers ; i++){
      let date = new Date();
      let user_type = i<numUsers/2 ? 'Staff' : 'Guest';
      let timeServiced = randomDate(start, end);
      demoRoomServices.push(
        {
          user_id: numRoomServices+1+i,
          reservation_id: i,
          service_type: i%2==0 ? 0 : 1, // 0 if room cleaning, 1 if room order
          time_serviced: i%4==0 ? null : timeServiced,
        }
      );
    }

    return queryInterface.bulkInsert('Room_services',demoRoomServices);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Room_services', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
