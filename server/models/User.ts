import { Model, DataTypes, Sequelize, Association } from 'sequelize';
import { Comment } from './Comment';
import { Post } from './Post';

export class User extends Model {
  public id: number;
  public email: string;
  public fullName: string;
  public userName: string;
  public userAvatar: string;
  public passwordHash: string;

  public readonly posts?: Post[];
  public readonly comments?: Comment[];

  public static associations: {
    posts: Association<User, Post>;
    comments: Association<User, Comment>;
  }

  public static associate(models: { [key: string]: any }) {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
    });
    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
    });
  }
}

export const UserFactory = (sequelize: Sequelize) => {
  User.init({
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    userName: DataTypes.STRING,
    userAvatar: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  }, { sequelize, paranoid: true });

  return User;
};
