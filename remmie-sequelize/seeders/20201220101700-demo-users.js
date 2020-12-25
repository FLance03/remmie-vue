'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const numUsers = 200;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoUsers = [];
    let count = 1;
    for (let i=0 ; i<numUsers ; i++,count++){
      let date = new Date();
      let user_type = i<numUsers/2 ? 'Staff' : 'Guest';
      if (i%(numUsers/2) == 0){
        count = 1;
        date = new Date();
      }
      date.setDate(date.getDate() + i);
      let salt = bcrypt.genSaltSync(saltRounds);
      let password = bcrypt.hashSync(count+'password'+user_type,salt);
      demoUsers.push(
        {
          id: i+1,
          first_name: count+'first_name'+user_type,
          last_name: count+'last_name'+user_type,
          user_type: user_type.toLowerCase(),
          email: count+'email'+user_type+'@example.com',
          password: password,
          date_created: date,
          date_updated: date,
          date_deleted: i%2==0 ? date : null,
        }
      );
    }
    let date = new Date();
    let salt = bcrypt.genSaltSync(saltRounds);
    let password = bcrypt.hashSync('admin',salt);
    demoUsers.push(
      {
        first_name: 'admin',
        last_name: 'admin',
        user_type: 'admin',
        email: 'admin@gmail.com',
        password: password,
        date_created: date,
        date_updated: date,
        date_deleted: null,
      }
    );

    return queryInterface.bulkInsert('Users',demoUsers);
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
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
