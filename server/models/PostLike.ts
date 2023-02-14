import { Model, DataTypes, Sequelize, Association } from 'sequelize';
import { Post } from './Post';
import { User } from './User';

export class PostLike extends Model {
  public id: number;

  public readonly user?: User;
  public readonly post?: Post;

  public static associations: {
    post: Association<PostLike, Post>;
    user: Association<PostLike, User>;
  }

  public static associate(models: { [key: string]: any }) {
    PostLike.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    PostLike.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post',
    });
  }
}

export const PostLikeFactory = (sequelize: Sequelize) => {
  PostLike.init({}, { sequelize, paranoid: true });

  return PostLike;
};
