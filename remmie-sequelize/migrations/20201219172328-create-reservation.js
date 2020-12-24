'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reservations', {
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
      hotel_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      room_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      room_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      room_floor: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price_per_room: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      payment_option: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date_checkin: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_checkout: {
        allowNull: false,
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
    await queryInterface.dropTable('reservations');
  }
};