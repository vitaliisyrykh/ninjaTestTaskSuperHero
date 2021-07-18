'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate (models) {
      Image.belongsTo(models.SuperHero,{
        foreignKey: 'hero_id'
      })
    }
  }
  Image.init(
    {
      path: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: 'Image',
      
      
    }
  );
  return Image;
};
