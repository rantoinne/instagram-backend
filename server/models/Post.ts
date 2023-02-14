import { Model, DataTypes, Sequelize, Association } from 'sequelize';
import { Comment } from './Comment';
import { PostLike } from './PostLike';
import { User } from './User';

export enum POST_TYPE {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export class Post extends Model {
  public id: number;
  public postType: POST_TYPE;
  public url: string;
  public description: string;

  public readonly user?: User;
  public readonly comments?: Comment[];
  public readonly postLikes?: PostLike[];

  public static associations: {
    user: Association<Post, User>;
    comments: Association<Post, Comment>;
    postLikes: Association<Post, PostLike>;
  }

  public static associate(models: { [key: string]: any }) {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    Post.hasMany(models.PostLike, {
      foreignKey: 'postId',
      as: 'postLikes',
    });
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
    });
  }
}

export const PostFactory = (sequelize: Sequelize) => {
  Post.init({
    url: DataTypes.STRING,
    postType: DataTypes.STRING,
    description: DataTypes.STRING,
  }, { sequelize, paranoid: true });

  return Post;
};
