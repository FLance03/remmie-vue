'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t =>{
      return Promise.all([
        queryInterface.removeColumn(
          'announcements',
          'createdAt',
          { transaction : t }
        ),
        queryInterface.removeColumn(
          'announcements',
          'updatedAt',
          { transaction : t }
        )
      ]);
    });
  },
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t =>{
      return Promise.all([
        queryInterface.addColumn(
          'announcements',
          'createdAt',
          { transaction : t }
        ),
        queryInterface.addColumn(
          'announcements',
          'updatedAt',
          { transaction : t }
        )
      ]);
    });
  },
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
};
