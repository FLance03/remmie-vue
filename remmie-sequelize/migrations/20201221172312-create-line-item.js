'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('line_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      room_service_id: {
        type: Sequelize.BIGINT
      },
      product_id: {
        type: Sequelize.BIGINT
      },
      price: {
        type: Sequelize.FLOAT
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      date_created: {
        type: Sequelize.DATE
      },
      date_updated: {
        type: Sequelize.DATE
      },
      date_deleted: {
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('line_items');
  }
};