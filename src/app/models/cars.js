'use strict';
const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const cars = sequelize.define('cars', {
        id: {
          type: DataTypes.UUID,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true,
          defaultValue: DataTypes.UUIDV4   
        },
        brand: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false,
        },
  }, {
      tableName: "cars"
  })

  return cars;
}