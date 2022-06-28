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
        deletedBy: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
              notEmpty: true
          }
      },
      createdBy: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
              notEmpty: true
          }
      },
      updatedBy: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
              notEmpty: true
          }
      }
  }, {
      tableName: "cars"
  })

  return cars;
}