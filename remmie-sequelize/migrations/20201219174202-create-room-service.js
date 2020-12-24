'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('room_services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      reservation_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      service_type: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      time_serviced: {
        type: Sequelize.DATE
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_updated: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_deleted: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('room_services');
  }
};