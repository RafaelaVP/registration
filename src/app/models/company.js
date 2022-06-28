'use strict';
const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
        id: {
          type: DataTypes.UUID,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true,
          defaultValue: DataTypes.UUIDV4   
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cnpj: {
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
      tableName: "company"
  })

  return company;
}