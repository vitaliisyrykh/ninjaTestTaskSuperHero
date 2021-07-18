'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHero extends Model {
    static associate (models) {
     SuperHero.hasMany(models.SuperPower, {
       foreignKey: 'hero_id'
     });
     SuperHero.hasMany(models.Image,{
      foreignKey: 'hero_id',
      
     })
    }
  }
  SuperHero.init(
    {
      nickName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true,
        }
      },
      realName: {
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true
        }
      },
      originDescription: {
        type:DataTypes.TEXT,
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true
        }
      },
      catchPhrase: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        }
      }
    },
    {
      sequelize,
      modelName: 'SuperHero'
    }
  );
  return SuperHero;
};
