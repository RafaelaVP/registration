'use strict';
const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      
  }, {
      tableName: "user"
  })

  return user;
}