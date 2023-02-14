import { Model, DataTypes, Sequelize, Association } from 'sequelize';
import { Chat } from './Chat';
import { User } from './User';

export class Conversation extends Model {
  public id: number;

  // public readonly userOne?: User;
  // public readonly userTwo?: User;
  // public readonly chats?: Chat[];

  public static associations: {
    // chats: Association<Conversation, Chat>;
    // userOne: Association<Conversation, User>;
    // userTwo: Association<Conversation, User>;
  }

  public static associate(models: { [key: string]: any }) {
    // Conversation.belongsTo(models.Post, {
    //   foreignKey: 'userOne',
    //   as: 'userOne',
    // });
    // Conversation.belongsTo(models.Post, {
    //   foreignKey: 'userTwo',
    //   as: 'userTwo',
    // });
    // Conversation.hasMany(models.Chat, {
    //   foreignKey: 'conversationId',
    //   as: 'chats',
    // });
  }
}

export const ConversationFactory = (sequelize: Sequelize) => {
  Conversation.init({
    // id: DataTypes.INTEGER,
  }, { sequelize, paranoid: true });

  return Conversation;
};
