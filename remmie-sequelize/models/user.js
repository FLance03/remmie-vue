const {DataTypes, DATE} = require("sequelize");
const connection = require("../dbconnection");

const user = connection.sequelize.define("users",{
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
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
  tableName: 'users',
  createdAt: 'date_created',
  updatedAt: 'date_updated',
});

exports.model = user;







// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class user extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   user.init({
//     id: DataTypes.BIGINT,
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     date_created: DataTypes.DATE,
//     date_updated: DataTypes.DATE,
//     date_deleted: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'user',
//   });
//   return user;
// };