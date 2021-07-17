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
        field: "nick_name"
      },
      realName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "real_name",

      },
      originDescription: {
        type: Sequelize.STRING,
        field:"origin_description",
        allowNull: false
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: "catch_phrase",
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SuperHeros');
  }
};