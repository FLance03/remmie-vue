module.exports = (sequelize,DataTypes) => {
  const room_service = sequelize.define("room_service",{
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    // user_id: {
    //   type: DataTypes.BIGINT,
    //   allowNull: false,
    //   references: {
    //     model: user,
    //     key: 'id',
    //   },
    // },
    // reservation_id: {
    //   type: DataTypes.BIGINT,
    //   allowNull: false,
    //   references: {
    //     model: reservation,
    //     key: 'id',
    //   },
    // },
    service_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    time_serviced: {
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
    tableName: 'room_services',
    timestamps: true,
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    deletedAt: 'date_deleted',
    paranoid: true,
  });
  return room_service;
}


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class room_service extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   room_service.init({
//     id: DataTypes.BIGINT,
//     user_id: DataTypes.BIGINT,
//     reservation_id: DataTypes.BIGINT,
//     service_type: DataTypes.BOOLEAN,
//     time_serviced: DataTypes.DATE,
//     date_created: DataTypes.DATE,
//     date_updated: DataTypes.DATE,
//     date_deleted: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'room_service',
//   });
//   return room_service;
// };