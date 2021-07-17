'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SuperHeros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        
      },
      realName: {
        type: Sequelize.STRING,
        allowNull: false,
        

      },
      originDescription: {
        type: Sequelize.STRING,
        
        allowNull: false
      },
      catchPhrase: {
        type: Sequelize.STRING,
        
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SuperHeros');
  }
};