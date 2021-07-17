'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
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
