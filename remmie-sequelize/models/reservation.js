const {DataTypes, DATE} = require("sequelize");
const connection = require("../app");

const reservation = connection.sequelize.define("reservation",{
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: user,
      key: 'id',
    },
  },
  hotel_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: hotel,
      key: 'id',
    },
  },
  room_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  room_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  room_floor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price_per_room: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment_option: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_checkin: {
    type: DataTypes.DATE,
  },
  date_checkout: {
    type: DataTypes.DATE,
  },
  date_created: {
    type: DataTypes.DATE,
  },
  date_updated: {
    type: DataTypes.DATE,
  },
  date_deleted: {
    type: DataTypes.DATE,
  },
},
{
  tableName: 'reservations',
  createdAt: 'date_creatted',
  updatedAt: 'date_updated',
  deletedAt: 'date_deleted',
});

exports.model = reservation;




// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class reservation extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   reservation.init({
//     id: DataTypes.BIGINT,
//     user_id: DataTypes.BIGINT,
//     hotel_id: DataTypes.BIGINT,
//     room_type: DataTypes.STRING,
//     room_number: DataTypes.INTEGER,
//     room_floor: DataTypes.INTEGER,
//     price_per_room: DataTypes.FLOAT,
//     payment_option: DataTypes.STRING,
//     date_checkin: DataTypes.DATE,
//     date_checkout: DataTypes.DATE,
//     date_created: DataTypes.DATE,
//     date_updated: DataTypes.DATE,
//     date_deleted: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'reservation',
//   });
//   return reservation;
// };