import { reqType, resType } from '../../utils/types';
import asyncWrapper from '../../utils/asyncWrapper';
import { createPost, getAllPosts, getUserPosts } from './Post.services';

export const createPostController = async (req: reqType, res: resType) => {
  const {
    url,
    userId,
    postType,
    description,
  } = req.body;
  await createPost(url, userId, postType, description);
  res.send({
    isSuccess: true,
  }).end();
};

export const getPosts = async (req: reqType, res: resType) => {
  const {
    userId,
  } = req.body;
  const allPosts = await getAllPosts(userId);
  res.send({
    allPosts,
    isSuccess: true,
  }).end();
};

export const getUserPostsController = async (req: reqType, res: resType) => {
  const {
    userId,
  } = req.body;
  const allPosts = await getUserPosts(userId);
  res.send({
    allPosts,
    isSuccess: true,
  }).end();
};

export default {
  getPosts: asyncWrapper(getPosts),
  createPost: asyncWrapper(createPostController),
  getUserPosts: asyncWrapper(getUserPostsController),
};
