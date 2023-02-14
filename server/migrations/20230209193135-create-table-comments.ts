import * as Sequelize from 'sequelize';

export default {
  up: (queryInterface: Sequelize.QueryInterface) => queryInterface.createTable('Comments', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    comment: {
      type: Sequelize.TEXT,
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id',
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
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
  down: (queryInterface: Sequelize.QueryInterface) => queryInterface.dropTable('Comments'),
};
