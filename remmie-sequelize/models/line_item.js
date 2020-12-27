module.exports = (sequelize,DataTypes) => {
  const line_item = sequelize.define("line_item",{
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_deleted: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'line_items',
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    deletedAt: 'date_deleted',
  });
  return line_item;
}

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class line_item extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   line_item.init({
//     id: DataTypes.BIGINT,
//     room_service_id: DataTypes.BIGINT,
//     product_id: DataTypes.BIGINT,
//     price: DataTypes.FLOAT,
//     quantity: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'line_item',
//   });
//   return line_item;
// };