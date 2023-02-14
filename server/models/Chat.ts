import { Model, DataTypes, Sequelize, Association } from 'sequelize';
import { Conversation } from './Conversation';

export class Chat extends Model {
  public id: number;
  public message: number;

  // public readonly conversation?: Conversation;

  public static associations: {
    // user: Association<Chat, Conversation>;
  }

  public static associate(models: { [key: string]: any }) {
    // Chat.belongsTo(models.Conversation, {
    //   foreignKey: 'conversationId',
    //   as: 'conversation',
    // });
  }
}

export const ChatFactory = (sequelize: Sequelize) => {
  Chat.init({
    // id: DataTypes.INTEGER,
    message: DataTypes.STRING,
  }, { sequelize, paranoid: true });

  return Chat;
};
