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
  }, {
      tableName: "company"
  })

  return company;
}