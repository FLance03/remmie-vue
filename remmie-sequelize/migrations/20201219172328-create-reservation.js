'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      hotel_id: {
        type: Sequelize.BIGINT
      },
      room_type: {
        type: Sequelize.STRING
      },
      room_number: {
        type: Sequelize.INTEGER
      },
      room_floor: {
        type: Sequelize.INTEGER
      },
      price_per_room: {
        type: Sequelize.FLOAT
      },
      payment_option: {
        type: Sequelize.STRING
      },
      date_checkin: {
        type: Sequelize.DATE
      },
      date_checkout: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('reservations');
  }
};