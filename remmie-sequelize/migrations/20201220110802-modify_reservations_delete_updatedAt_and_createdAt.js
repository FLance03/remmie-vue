'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t =>{
      return Promise.all([
        queryInterface.removeColumn(
          'reservations',
          'createdAt',
          { transaction : t }
        ),
        queryInterface.removeColumn(
          'reservations',
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
          'reservations',
          'createdAt',
          {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
          },{ transaction : t }
        ),
        queryInterface.addColumn(
          'reservations',
          'updatedAt',
          {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
          },{ transaction : t }
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
