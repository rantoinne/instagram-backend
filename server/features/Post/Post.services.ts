import models from '../../models';
import Sequelize, { Op } from 'sequelize';
import { POST_TYPE } from '../../models/Post';

const {
  Post,
  User,
  Comment,
  PostLike,
  sequelize,
} = models;

export const createPost = async (
  url: string,
  userId: number,
  postType: POST_TYPE,
  description: string,
) => await Post.create({
  url,
  userId,
  postType,
  description,
});

export const getAllPosts = async (userId: number) => {
  const posts = await Post.findAll({
    order: [['createdAt', 'DESC']],
    include: [{
      model: PostLike,
      as: 'postLikes',
    }, {
      model: User,
      as: 'user',
    }, {
      model: Comment,
      as: 'comments',
      include: [{
        model: User,
        as: 'user'
      }],
    }],
  });
  
  return posts;
};

export const getUserPosts = async (userId: number) => {
  const posts = await Post.findAll({
    order: [['createdAt', 'DESC']],
  });
  
  return posts;
};

export const getSpecificPost = async (postId: number) => {
  const post = await Post.findOne({
    order: [['createdAt', 'DESC']],
    where: { id: postId },
    include: [{
      model: PostLike,
      as: 'postLikes',
    }, {
      model: User,
      as: 'user',
    }, {
      model: Comment,
      as: 'comments',
      include: [{
        model: User,
        as: 'user'
      }],
    }],
  });
  
  return post;
};
