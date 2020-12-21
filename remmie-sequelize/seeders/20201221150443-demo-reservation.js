'use strict';

const num_data = 150;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoReservations = [];
    
    let dateToday = new Date();
    let presentYear = dateToday.getFullYear();
    let presentMonth = dateToday.getMonth();
    let presentDay = dateToday.getDate();
    let dateLeftLeft = new Date(presentYear-2, presentMonth, presentDay);
    let dateLeft = new Date(presentYear-1, presentMonth, presentDay);
    let dateRight = new Date(presentYear+1, presentMonth, presentDay);
    let dateRightRight = new Date(presentYear+2, presentMonth, presentDay);
    let dateCheckIn;
    let dateCheckOut;
    let date;
    for (let i=0 ; i<num_data ; i++){
      
      if (i%(num_data/2) == 0){
        date = new Date();
      }
      date.setDate(date.getDate() + i);
      if (i%3 == 0){
        dateCheckIn = dateLeftLeft;
        dateCheckOut = dateLeft;
      }else if (i%3 == 1){
        dateCheckIn = dateLeft;
        dateCheckOut = dateRight;
      }else {
        dateCheckIn = dateRight;
        dateCheckOut = dateRightRight;
      }
      demoReservations.push(
        {
          id: i+1,
          user_id: i%100 + 101,
          date_checkin: dateCheckIn,
          date_checkout: dateCheckOut,
          date_created: date,
          date_updated: date,
          date_deleted: i%5==0 ? date : null,
        }
      );
    }
    return queryInterface.bulkInsert('Reservations',demoReservations);
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
    return queryInterface.bulkDelete('Reservations', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
