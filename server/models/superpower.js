'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperPower extends Model {
    
    static associate(models) {
      
    }
  };
  SuperPower.init({
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  }, {
    sequelize,
    modelName: 'SuperPower',
  });
  return SuperPower;
};