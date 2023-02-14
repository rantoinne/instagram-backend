import * as Sequelize from 'sequelize';

export default {
  up: (queryInterface: Sequelize.QueryInterface) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    fullName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    passwordHash: {
      type: Sequelize.TEXT,
    },
    userName: {
      type: Sequelize.STRING,
    },
    userAvatar: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface: Sequelize.QueryInterface) => queryInterface.dropTable('Users'),
};
