import { Model, DataTypes, Sequelize, Association } from 'sequelize';
import { Post } from './Post';
import { User } from './User';

export class Comment extends Model {
  public id: number;
  public comment: string;

  public readonly post?: Post;
  public readonly user?: User;

  public static associations: {
    post: Association<Comment, Post>;
    user: Association<Comment, User>;
  }

  public static associate(models: { [key: string]: any }) {
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post',
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }
}

export const CommentFactory = (sequelize: Sequelize) => {
  Comment.init({
    comment: DataTypes.STRING,
  }, { sequelize, paranoid: true });

  return Comment;
};
