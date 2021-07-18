'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperPower extends Model {
    static associate (models) {
      SuperPower.belongsTo(models.SuperHero,{
        foreignKey: 'hero_id'
      })
    }
  }
  SuperPower.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      discription:{
        type: DataTypes.TEXT(150),
        
      }
    },
    {
      sequelize,
      modelName: 'SuperPower'
    }
  );
  return SuperPower;
};
